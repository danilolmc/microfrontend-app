import { MFERoutes } from "@app/utility";

export type MFERoutType<T extends Map<any, any>> = {
    [K in T extends Map<infer U, any> ? U : never]: string;
}


export type MFERouteObjectType = MFERoutType<typeof MFERoutes>;
