import { IsString } from "class-validator";

export class CreateCarDto{

    @IsString({ message: "El brand tiene que ser tipo String"})
    readonly brand: string;

    @IsString({ message: "El model tiene que ser tipo String"})
    readonly model: string;
}