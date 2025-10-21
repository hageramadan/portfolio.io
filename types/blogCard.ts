export interface BlogCardType {
  img: string;
  title: string;
  cont: React.ReactNode;
  date: string;
  role: string;
  commentNumber: string;
  blogId?: number; 
}