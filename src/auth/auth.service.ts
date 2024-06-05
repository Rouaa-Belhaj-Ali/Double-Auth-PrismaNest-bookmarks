/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";



//@Injectable()

export class AuthService{
constructor(private prisma: PrismaService){}
    signup(){


        return {msg:  'I have Sign up'}
    }


    signin(){


        return {msg:  'I have Sign in'}
    }
}



    








