import { Injectable } from '@angular/core';
import { jwtDecode, JwtPayload } from 'jwt-decode';
import { Token, TokenPayload } from '../../_interfaces/token';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

    private tokenDecoder(token: string | null): TokenPayload | null{
    const tokenDecoded:TokenPayload | null = token != null? jwtDecode(token): null
    
    return tokenDecoded
  }

  getExpToken(token: string | null ) {
    const expDateToken: TokenPayload | null = this.tokenDecoder(token)
    return expDateToken !=null ?console.log(expDateToken.exp):null

  }

  getRoleToken(token: string | null) {
    const expDateToken: TokenPayload | null = this.tokenDecoder(token)
    return expDateToken !=null ?expDateToken.role:null

  }

  getSubToken(token: string | null) {
    const expDateToken: TokenPayload | null = this.tokenDecoder(token)
    return expDateToken !=null ?console.log(expDateToken.sub):null

  }
}
