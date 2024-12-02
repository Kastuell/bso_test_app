export type ErrorT = {
  status: number;
  data: {
    data: any;
    error: {
      details: {};
      message: string;
      name: string;
      status: 400;
    };
  };
};
