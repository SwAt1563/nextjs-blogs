/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type AuthResponse = {
  __typename?: 'AuthResponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
  user?: Maybe<User>;
};

export type Blog = {
  __typename?: 'Blog';
  category: Category;
  comments?: Maybe<Array<Comment>>;
  createdAt?: Maybe<Scalars['String']['output']>;
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  imageUrl?: Maybe<Scalars['String']['output']>;
  number_of_likes: Scalars['Int']['output'];
  number_of_views: Scalars['Int']['output'];
  status: Status;
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  user: User;
  userMadeLike?: Maybe<Scalars['Boolean']['output']>;
};

export type BlogPagination = {
  __typename?: 'BlogPagination';
  blogs?: Maybe<Array<Blog>>;
  total: Scalars['Int']['output'];
};

export type Category = {
  __typename?: 'Category';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type Comment = {
  __typename?: 'Comment';
  blogId: Scalars['Int']['output'];
  content: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  user?: Maybe<User>;
  userId: Scalars['Int']['output'];
};

export type Like = {
  __typename?: 'Like';
  blogId: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  userId: Scalars['ID']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createBlog: Blog;
  createCategory: Category;
  createComment: Comment;
  createLike: Like;
  createView: View;
  deleteBlog: Blog;
  deleteLike: Like;
  login: AuthResponse;
  register: AuthResponse;
  updateBlog: Blog;
  updateBlogStatus: Blog;
};


export type MutationCreateBlogArgs = {
  categoryName: Scalars['String']['input'];
  description: Scalars['String']['input'];
  imageUrl?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
};


export type MutationCreateCategoryArgs = {
  name: Scalars['String']['input'];
};


export type MutationCreateCommentArgs = {
  blogId: Scalars['ID']['input'];
  content: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
};


export type MutationCreateLikeArgs = {
  blogId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};


export type MutationCreateViewArgs = {
  blogId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};


export type MutationDeleteBlogArgs = {
  blogId: Scalars['ID']['input'];
};


export type MutationDeleteLikeArgs = {
  blogId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};


export type MutationLoginArgs = {
  username: Scalars['String']['input'];
};


export type MutationRegisterArgs = {
  email: Scalars['String']['input'];
  imageUrl?: InputMaybe<Scalars['String']['input']>;
  username: Scalars['String']['input'];
};


export type MutationUpdateBlogArgs = {
  blogId: Scalars['ID']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  imageUrl?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateBlogStatusArgs = {
  blogId: Scalars['ID']['input'];
};

export type Query = {
  __typename?: 'Query';
  getBlog?: Maybe<Blog>;
  getBlogs?: Maybe<BlogPagination>;
  getBlogsBySearchQuery?: Maybe<BlogPagination>;
  getBlogsByUser?: Maybe<Array<Blog>>;
  getCategories?: Maybe<Array<Category>>;
  getUser?: Maybe<User>;
};


export type QueryGetBlogArgs = {
  blogId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};


export type QueryGetBlogsArgs = {
  categoryName?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Status>;
};


export type QueryGetBlogsBySearchQueryArgs = {
  categoryName?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetBlogsByUserArgs = {
  userId: Scalars['ID']['input'];
};


export type QueryGetUserArgs = {
  userId: Scalars['ID']['input'];
};

export enum Role {
  Admin = 'ADMIN',
  User = 'USER'
}

export enum Status {
  Draft = 'DRAFT',
  Published = 'PUBLISHED'
}

export type User = {
  __typename?: 'User';
  blogs?: Maybe<Array<Blog>>;
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  imageUrl?: Maybe<Scalars['String']['output']>;
  role: Role;
  username: Scalars['String']['output'];
};

export type View = {
  __typename?: 'View';
  blogId: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  userId: Scalars['ID']['output'];
};
