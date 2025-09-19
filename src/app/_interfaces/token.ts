export interface Token {
    access_token: string;
    token_type: string;

}

export interface TokenPayload {
    sub: string;
    role: string;
    exp: Date;
}