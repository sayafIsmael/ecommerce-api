export class CreateUserDto {
    readonly _id?: string;
    readonly name: string;
    readonly username: string;
    readonly email: string;
    readonly password: string;
    readonly role: string;
    readonly location: [];
    readonly avatarUri?: string;
}