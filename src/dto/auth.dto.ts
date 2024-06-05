/* eslint-disable prettier/prettier */

import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { Unique } from 'typeorm'; // Import the 'Unique' decorator from the 'typeorm' package


export class AuthDto {
  @IsEmail()
  @IsNotEmpty()
  @Unique(['email'])

  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
  