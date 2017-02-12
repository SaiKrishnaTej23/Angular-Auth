import { Post } from './post';
export class User {
    Id: number;
    Name: string;
    Username: string;
    Password: string;
    HasAccess: boolean;
    Permissions: string[];
    PhotoUrl : string;
    Posts : Post [];
}  