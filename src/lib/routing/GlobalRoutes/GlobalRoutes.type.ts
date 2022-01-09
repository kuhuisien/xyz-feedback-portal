// Schema of every route object
export interface Route {
  path: string;
  exact: boolean;
  component: React.ReactNode;
}
