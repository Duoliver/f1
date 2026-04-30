export default interface TabsProps {
  tabs: TabProps[];
}

interface TabProps {
  title: string;
  content: React.ReactNode;
}
