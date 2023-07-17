import { format } from 'date-fns';

export function currentDate(): string {
  return format(new Date(), 'yyyy-MM-dd');
}
