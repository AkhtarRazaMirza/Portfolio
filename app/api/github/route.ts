import { Octokit } from "octokit";
import { NextResponse, NextRequest } from "next/server";

interface ContributionDay {
  contributionCount: number;
  date: string;
}

interface ContributionWeek {
  contributionDays: ContributionDay[];
}

interface GraphQLResponse {
  user: {
    contributionsCollection: {
      contributionCalendar: {
        totalContributions: number;
        weeks: ContributionWeek[];
      };
    };
  } | null;
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const username = searchParams.get("username");

  if (!username) {
    return NextResponse.json(
      { error: "Username is Required" },
      { status: 400 }
    );
  }

  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    return NextResponse.json(
      { error: "GITHUB_TOKEN is required and must be configured manually." },
      { status: 500 }
    );
  }

  try {
    const octokit = new Octokit({
      auth: token,
    });

    const query = `
        query($username: String!) {
          user(login: $username) {
            contributionsCollection {
              contributionCalendar {
                totalContributions
                weeks {
                  contributionDays {
                    contributionCount
                    date
                  }
                }
              }
            }
          }
        }
      `;

    const response = await octokit.graphql<GraphQLResponse>(query, { username });

    if (!response?.user) {
      return NextResponse.json(
        { error: "GitHub user not found" },
        { status: 404 }
      );
    }

    const calendar = response.user.contributionsCollection.contributionCalendar;

    // Flatten the weeks array to get all contribution days
    const contributions = calendar.weeks.flatMap((week) =>
      week.contributionDays.map((day) => ({
        count: day.contributionCount,
        date: day.date,
      }))
    );

    return NextResponse.json({
      user: {
        totalContribution: calendar.totalContributions,
      },
      contributions,
    });
  } catch (error) {
    console.error("GITHUB API ERROR", error);
    return NextResponse.json(
      { error: "Failed to fetch github Data" },
      { status: 500 }
    );
  }
}
