export interface IUseImageResult {
  src: string | undefined
  loading: boolean
  error: any
}

export type TSrc = string | string[]

export type TUseImage = (src: TSrc) => IUseImageResult

export interface IImageCache {
  [key: string]: {
    src?: string
    promise: Promise<any>
    status: 'pending' | 'resolved' | 'reject'
    error: any
  }
}
