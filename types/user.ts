export type UserCredentialsProps = {
  email: string;
  password: string;
};

export type UserProps = {
  id: string;
  name: string;
  photo_url: string;
} & UserCredentialsProps;
