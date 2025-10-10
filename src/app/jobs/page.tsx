import { Search } from 'lucide-react';

import { jobs } from '@/lib/placeholder-data';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function JobsPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="font-headline text-3xl font-bold tracking-tight">
          Job Listings
        </h1>
        <p className="text-muted-foreground">
          Find your next opportunity. Explore full-time, freelance, and remote roles.
        </p>
      </div>

      <div className="flex flex-col gap-4 md:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input placeholder="Search by title, skill, or keyword..." className="pl-10" />
        </div>
        <Select>
          <SelectTrigger className="md:w-[180px]">
            <SelectValue placeholder="Location" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="berlin">Berlin, Germany</SelectItem>
            <SelectItem value="sf">San Francisco, USA</SelectItem>
            <SelectItem value="paris">Paris, France</SelectItem>
            <SelectItem value="london">London, UK</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="md:w-[180px]">
            <SelectValue placeholder="Industry" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="tech">Technology</SelectItem>
            <SelectItem value="data">Data Science</SelectItem>
            <SelectItem value="design">Design</SelectItem>
            <SelectItem value="telecom">Telecommunications</SelectItem>
          </SelectContent>
        </Select>
        <Button>Search</Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {jobs.map((job) => (
          <Card key={job.id} className="flex flex-col">
            <CardHeader>
              <CardTitle className="font-headline">{job.title}</CardTitle>
              <CardDescription>
                {job.company} &middot; {job.location}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-muted-foreground">
                {job.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Badge variant="secondary">{job.type}</Badge>
                {job.requirements.slice(0, 2).map((req) => (
                  <Badge key={req} variant="outline">
                    {req}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Apply Now</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
