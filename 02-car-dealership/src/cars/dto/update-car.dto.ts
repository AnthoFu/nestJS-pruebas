import { IsOptional, IsString, IsUUID } from "class-validator";

export class UpdateCarDto {

    @IsString()
    @IsUUID()
    @IsOptional()
    readonly id?: string;

    @IsString({ message: "El brand tiene que ser tipo String"})
    @IsOptional()
    readonly brand?: string;

    @IsOptional()
    @IsString({ message: "El model tiene que ser tipo String"})
    readonly model?: string;
}