import type { Request as CfRequest, ExecutionContext, KVNamespace, R2Bucket } from "@cloudflare/workers-types"

/**
 * Reference: https://developers.cloudflare.com/workers/runtime-apis/fetch-event/#parameters
 */
export interface CfPagesEnv {
  ASSETS: { fetch: (request: CfRequest) => Promise<Response> }
  CF_PAGES: "1"
  CF_PAGES_BRANCH: string
  CF_PAGES_COMMIT_SHA: string
  CF_PAGES_URL: string

  // Bindings
  SOME_KV: KVNamespace
  UPLOADS_BUCKET: R2Bucket
}

declare module "vinxi/server" {
  export interface H3EventContext {
    cf: CfRequest["cf"]
    cloudflare: {
      request: CfRequest
      env: CfPagesEnv
      context: ExecutionContext
    }
  }
}
