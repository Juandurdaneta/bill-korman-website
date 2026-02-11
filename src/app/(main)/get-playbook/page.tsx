import { Metadata } from 'next';
import PlaybookForm from './PlaybookForm';

export const metadata: Metadata = {
  title: 'Get Your Free Playbook | The 168 Game - Bill Korman',
  description:
    'Download The Time Ownership Playbook free. Discover where you\'re losing time, which hours make you money, and the 3 moves to reclaim 20+ hours per week.',
  openGraph: {
    title: 'Get Your Free Time Ownership Playbook | The 168 Game',
    description:
      'The proven framework entrepreneurs use to reclaim 20+ hours per week. Download free.',
  },
};

export default function GetPlaybookPage() {
  return <PlaybookForm />;
}
