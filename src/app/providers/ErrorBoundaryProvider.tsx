import { ErrorBoundary } from "@/shared/ui/error/ErrorBoundary";

type Props = {
  children: React.ReactNode;
};
export const ErrorBoundaryProvider: React.FC<Props> = ({ children }) => {
  return <ErrorBoundary>{children}</ErrorBoundary>;
};
