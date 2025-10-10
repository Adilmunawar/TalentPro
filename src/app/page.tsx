import {
  ArrowUpRight,
  Building2,
  FileText,
  Users,
  Briefcase,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

import { applications, candidates, jobs } from '@/lib/placeholder-data';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export default function Dashboard() {
  const totalJobs = jobs.length;
  const totalCandidates = candidates.length;
  const totalApplications = applications.length;
  const interviewingCount = applications.filter(
    (app) => app.status === 'Interviewing'
  ).length;

  return (
    <div className="flex flex-1 flex-col gap-4 md:gap-8">
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Open Positions
            </CardTitle>
            <Briefcase className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalJobs}</div>
            <p className="text-xs text-muted-foreground">
              +2 this month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">New Candidates</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+{totalCandidates}</div>
            <p className="text-xs text-muted-foreground">
              +5 this week
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Applications</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+{totalApplications}</div>
            <p className="text-xs text-muted-foreground">
              +10 this week
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Interviewing</CardTitle>
            <Building2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{interviewingCount}</div>
            <p className="text-xs text-muted-foreground">
              +3 active processes
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
        <Card className="xl:col-span-2">
          <CardHeader className="flex flex-row items-center">
            <div className="grid gap-2">
              <CardTitle>Recent Applications</CardTitle>
              <CardDescription>
                An overview of the latest job applications.
              </CardDescription>
            </div>
            <Button asChild size="sm" className="ml-auto gap-1">
              <Link href="/applications">
                View All
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Candidate</TableHead>
                  <TableHead className="hidden xl:table-column">
                    Job
                  </TableHead>
                  <TableHead className="hidden xl:table-column">
                    Status
                  </TableHead>
                  <TableHead className="hidden md:table-cell">
                    Date Applied
                  </TableHead>
                  <TableHead className="text-right">Company</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {applications.slice(0, 5).map((app) => (
                  <TableRow key={app.id}>
                    <TableCell>
                      <div className="font-medium">{app.candidateName}</div>
                      <div className="hidden text-sm text-muted-foreground md:inline">
                        {
                          candidates.find(c => c.name === app.candidateName)
                            ?.title
                        }
                      </div>
                    </TableCell>
                    <TableCell className="hidden xl:table-column">
                      {app.jobTitle}
                    </TableCell>
                    <TableCell className="hidden xl:table-column">
                      <Badge className="text-xs" variant="outline">
                        {app.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      {app.dateApplied}
                    </TableCell>
                    <TableCell className="text-right">
                      {app.companyName}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>New Candidates</CardTitle>
            <CardDescription>
              Recently added professionals to our database.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-8">
            {candidates.slice(0, 4).map((candidate) => (
              <div key={candidate.id} className="flex items-center gap-4">
                <Avatar className="hidden h-9 w-9 sm:flex">
                  <Image
                    src={candidate.avatarUrl}
                    alt={`Avatar of ${candidate.name}`}
                    width={36}
                    height={36}
                    data-ai-hint={candidate.dataAiHint}
                  />
                  <AvatarFallback>{candidate.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">
                    {candidate.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {candidate.title}
                  </p>
                </div>
                <div className="ml-auto font-medium">
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/candidates">View</Link>
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
