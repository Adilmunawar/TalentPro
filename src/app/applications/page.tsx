import { applications } from '@/lib/placeholder-data';
import { Badge } from '@/components/ui/badge';
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

const statusVariantMap: { [key: string]: 'default' | 'secondary' | 'destructive' | 'outline' } = {
  Interviewing: 'default',
  Offered: 'secondary',
  Pending: 'outline',
  Rejected: 'destructive',
};


export default function ApplicationsPage() {
  return (
    <div className="flex flex-col gap-8">
      <Card>
        <CardHeader>
          <CardTitle className="font-headline">Application Tracking</CardTitle>
          <CardDescription>
            Track candidate applications through the hiring process.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Candidate</TableHead>
                <TableHead>Job Title</TableHead>
                <TableHead>Company</TableHead>
                <TableHead>Date Applied</TableHead>
                <TableHead className="text-right">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {applications.map((app) => (
                <TableRow key={app.id}>
                  <TableCell className="font-medium">{app.candidateName}</TableCell>
                  <TableCell>{app.jobTitle}</TableCell>
                  <TableCell>{app.companyName}</TableCell>
                  <TableCell>{app.dateApplied}</TableCell>
                  <TableCell className="text-right">
                    <Badge variant={statusVariantMap[app.status] || 'outline'}>
                      {app.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
