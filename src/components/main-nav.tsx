'use client';

import {
  Building2,
  FileText,
  FileCheck2,
  Globe2,
  LayoutDashboard,
  Users,
  Briefcase,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { ComponentProps } from 'react';

import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar';

const navItems = [
  {
    href: '/',
    icon: LayoutDashboard,
    label: 'Dashboard',
  },
  {
    href: '/jobs',
    icon: Briefcase,
    label: 'Job Listings',
  },
  {
    href: '/candidates',
    icon: Users,
    label: 'Candidates',
  },
  {
    href: '/companies',
    icon: Building2,
    label: 'Companies',
  },
  {
    href: '/applications',
    icon: FileText,
    label: 'Applications',
  },
  {
    href: '/documents',
    icon: FileCheck2,
    label: 'Document Verification',
  },
  {
    href: '/compliance',
    icon: Globe2,
    label: 'Compliance Tool',
  },
];

type SidebarMenuButtonAsLinkProps = ComponentProps<typeof SidebarMenuButton> & {
  href: string;
};

const SidebarMenuButtonAsLink = (props: SidebarMenuButtonAsLinkProps) => (
  <SidebarMenuButton {...props} asChild>
    <Link href={props.href}>{props.children}</Link>
  </SidebarMenuButton>
);

export function MainNav() {
  const pathname = usePathname();

  return (
    <SidebarMenu>
      {navItems.map(({ href, icon: Icon, label }) => (
        <SidebarMenuItem key={href}>
          <SidebarMenuButtonAsLink
            href={href}
            isActive={pathname === href}
            tooltip={label}
          >
            <Icon />
            <span>{label}</span>
          </SidebarMenuButtonAsLink>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
}
