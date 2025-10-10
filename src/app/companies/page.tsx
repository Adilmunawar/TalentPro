import Image from 'next/image';

import { companies } from '@/lib/placeholder-data';
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
import { Building2 } from 'lucide-react';

export default function CompaniesPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="font-headline text-3xl font-bold tracking-tight">
          Client Companies
        </h1>
        <p className="text-muted-foreground">
          Manage profiles for our international client companies.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {companies.map((company) => (
          <Card key={company.id} className="flex flex-col">
            <CardHeader className="flex-row items-center gap-4">
               <div className="flex h-16 w-16 items-center justify-center rounded-lg border bg-muted">
                 <Image
                    src={company.logoUrl}
                    alt={`${company.name} logo`}
                    width={40}
                    height={40}
                    data-ai-hint={company.dataAiHint}
                    className="rounded-sm"
                  />
               </div>
              <div>
                <CardTitle className="font-headline">{company.name}</CardTitle>
                <CardDescription>{company.industry}</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-muted-foreground">
                {company.culture}
              </p>
              <div className="mt-4">
                <h4 className="text-sm font-semibold">Hiring Needs:</h4>
                <div className="mt-2 flex flex-wrap gap-2">
                  {company.hiringNeeds.map((need) => (
                    <Badge key={need} variant="outline">
                      {need}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="secondary" className="w-full">
                View Details
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
