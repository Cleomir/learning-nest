import { IsInt, IsString } from 'class-validator';

export class PipesDto {
  @IsString()
  name: string;

  @IsInt()
  age: number;
}
