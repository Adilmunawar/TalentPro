import Image from 'next/image';
import { Search } from 'lucide-react';
import { candidates } from '@/lib/placeholder-data';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
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

export default function CandidatesPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="font-headline text-3xl font-bold tracking-tight">
          Candidate Database
        </h1>
        <p className="text-muted-foreground">
          Browse and connect with top-tier professionals from around the world.
        </p>
      </div>

      <div className="flex flex-col gap-4 md:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Search by name, title, or skill..."
            className="pl-10"
          />
        </div>
        <Button>Search</Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {candidates.map((candidate) => (
          <Card key={candidate.id} className="flex flex-col text-center">
            <CardHeader className="flex-grow">
              <Avatar className="mx-auto h-24 w-24 border-2 border-primary/20">
                <Image
                  src={candidate.avatarUrl}
                  alt={candidate.name}
                  width={100}
                  height={100}
                  data-ai-hint={candidate.dataAiHint}
                />
                <AvatarFallback>{candidate.name.substring(0, 2)}</AvatarFallback>
              </Avatar>
              <CardTitle className="pt-4 font-headline">{candidate.name}</CardTitle>
              <CardDescription>{candidate.title}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex flex-wrap justify-center gap-2">
                {candidate.skills.slice(0, 3).map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
                {candidate.skills.length > 3 && (
                  <Badge variant="outline">+{candidate.skills.length - 3}</Badge>
                )}
              </div>
            </CardContent>
            <CardFooter className="flex-col gap-2">
              <Button className="w-full">View Profile</Button>
              <Button variant="outline" className="w-full">
                Match Jobs
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
