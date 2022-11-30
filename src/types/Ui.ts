export type Snackbar = {
  type: string;
  message: string;
  id: string;
  closeHandler(): void;
}

export type Snackbars = Snackbar[];

export type NewSnackbar = {
  type: string;
  message: string;
};