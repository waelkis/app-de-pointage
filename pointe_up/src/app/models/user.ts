export class User {
  toLocaleLowerCase() {
    throw new Error('Method not implemented.');
  }
  id!: object;
  username!: string;
  tel!: string;
  email!: string;
  password! : string;
  roles!: Role[];
}
export class Role {
  id!: number;
  name!: string;
}

