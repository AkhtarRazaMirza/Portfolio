"use client";
import React from "react";
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Calendar, GitBranch, GitCommit, Star } from "lucide-react";
import { motion } from "framer-motion";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { cn } from "@/lib/utils";

interface Props {
  username: string;
}
interface GithubStats {
  user: {
    totalContribution: number;
  };
  contributions: {
    count: number;
    date: string;
  }[];
}

const GithubStats = ({ username }: Props) => {
  const [stats, setStats] = useState<GithubStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(()=>{
    const fetchGithubStats = async ()=>{
      try {
        const response = await fetch(`/api/github?username=${username}`);

        if(!response.ok){
          const errorData = await response.json().catch(() => null);
          throw new Error(errorData?.error || `Error fetching data: ${response.statusText}`);
        }

        const data = await response.json();
        setStats(data);
      } catch (error) {
        setError(error instanceof Error ? error.message : "failed to fetch github stats");
      }
      finally{
        setLoading(false)
      }
    }
    fetchGithubStats();
  } , [username])

  if (loading) {
    return (
      <Card className="p-4 sm:p-6 bg-card border-border/5">
        <div className="animate-pulse space-y-4">
          <div className="h-4 bg-muted rounded w-3/4" />
          <div className="h-8 bg-muted rounded " />
          <div className="h-32 bg-muted rounded " />
        </div>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="p-4 sm:p-6 bg-card border-border/5">
        <p className="text-destructive">{error}</p>
      </Card>
    );
  }

  if(!stats) return null;

  // Calculate current streak (accounting for today being in-progress with 0 commits yet)
  let currentStreak = 0;
  const contributions = stats.contributions;
  if (contributions.length > 0) {
    let startIndex = contributions.length - 1;
    // If today has 0 commits so far, continue counting from yesterday if yesterday had commits
    if (contributions[startIndex].count === 0 && contributions.length > 1) {
      if (contributions[startIndex - 1].count > 0) {
        startIndex = contributions.length - 2;
      }
    }

    for (let i = startIndex; i >= 0; i--) {
      if (contributions[i].count > 0) {
        currentStreak++;
      } else {
        break;
      }
    }
  }

  // Calculate max contributions in a day
  const maxContributions =
    stats.contributions.length > 0
      ? Math.max(...stats.contributions.map((day) => day.count))
      : 0;

  // Calculate contribution levels
  const getContributionLevel = (count: number) => {
    if (count === 0 || maxContributions === 0) return "bg-muted";
    const percentage = (count / maxContributions) * 100;

    if (percentage <= 25) return "bg-primary/30";
    if (percentage <= 50) return "bg-primary/50";
    if (percentage <= 75) return "bg-primary/70";

    return "bg-primary";
  };

  return (
    <Card className="p-4 sm:p-6 lg:p-8 bg-card border-border/5 backdrop-blur-sm overflow-hidden w-full max-w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6 sm:space-y-8 w-full max-w-full min-w-0"
      >
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-full bg-primary/10">
            <GitCommit className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
          </div>
          <h3 className="text-lg sm:text-xl font-semibold">
            Contribution Activity
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="p-4 rounded-lg bg-secondary/50 backdrop-blur-sm"
          >
            <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-primary mb-2" />
            <p className="text-sm text-muted-foreground">Current Streak</p>
            <p className="text-xl sm:text-2xl font-bold text-primary">
              {" "}
              {currentStreak} days
            </p>
          </motion.div>

          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="p-4 rounded-lg bg-secondary/50 backdrop-blur-sm"
          >
            <GitBranch className="w-4 h-4 sm:w-5 sm:h-5 text-primary mb-2" />
            <p className="text-sm text-muted-foreground">Total Contributions</p>
            <p className="text-xl sm:text-2xl font-bold">
              {stats.user.totalContribution.toLocaleString()}
            </p>
          </motion.div>

          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="p-4 rounded-lg bg-secondary/50 backdrop-blur-sm sm:col-span-2 lg:col-span-1"
          >
            <Star className="w-4 h-4 sm:w-5 sm:h-5 text-primary mb-2" />
            <p className="text-sm text-muted-foreground">Best Day</p>
            <p className="text-xl sm:text-2xl font-bold">{maxContributions} commits</p>
          </motion.div>
        </div>

<div className="space-y-4 w-full max-w-full min-w-0">
<h4 className="text-sm font-medium text-muted-foreground">Last 30 days</h4>
<div className="w-full max-w-full overflow-x-auto pb-4 scrollbar-thin">
    <div className="grid grid-rows-1 grid-flow-col gap-1 w-max min-w-[560px] sm:min-w-[600px]">
    <TooltipProvider>
      {
        stats.contributions.slice(-30).map((day , index)=>(
          <motion.div
          key={day.date}
          initial={{scale:0}}
          animate={{scale:1}}
          transition={{delay:index * 0.02}}
          > 
          <Tooltip>
            <TooltipTrigger asChild>
              <div
              className={cn("h-6 w-6 sm:h-8 sm:w-8 rounded-sm" , getContributionLevel(day.count) , "transition-all duration-200 hover:scale-110")}
              />
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-xs font-semibold text-black">
              {day.count} contributions on {
                new Date(day.date).toLocaleDateString(
                  undefined,
                  {month:"short" , day:"numeric"}
                )
              }
              </p>
            </TooltipContent>
          </Tooltip>

          </motion.div>
        ))
      }
    </TooltipProvider>
    </div>
</div>
</div>

      </motion.div>
    </Card>
  );
};

export default GithubStats;
