export type TChildren = Readonly<{
  children: React.ReactNode;
}>;

export type TParams = {
  params: Promise<{ id: string }>;
};

export interface IGAEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}
