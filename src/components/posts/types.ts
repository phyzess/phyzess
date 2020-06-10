import { IPage } from '@phyzess/nophy'

export type IPost = Pick<IPage, 'name' | 'last_edited_time' | 'created_time' | 'rowId' | 'article'>
