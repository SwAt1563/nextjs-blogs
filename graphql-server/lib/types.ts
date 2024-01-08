import { GraphQLResolveInfo } from 'graphql';
import { BlogModel, CategoryModel, CommentModel, UserModel, LikeModel, ViewModel } from './models';
import { DataSourceContext } from './context';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
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

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  AuthResponse: ResolverTypeWrapper<Omit<AuthResponse, 'user'> & { user?: Maybe<ResolversTypes['User']> }>;
  Blog: ResolverTypeWrapper<BlogModel>;
  BlogPagination: ResolverTypeWrapper<Omit<BlogPagination, 'blogs'> & { blogs?: Maybe<Array<ResolversTypes['Blog']>> }>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Category: ResolverTypeWrapper<CategoryModel>;
  Comment: ResolverTypeWrapper<CommentModel>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Like: ResolverTypeWrapper<LikeModel>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  Role: Role;
  Status: Status;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  User: ResolverTypeWrapper<UserModel>;
  View: ResolverTypeWrapper<ViewModel>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  AuthResponse: Omit<AuthResponse, 'user'> & { user?: Maybe<ResolversParentTypes['User']> };
  Blog: BlogModel;
  BlogPagination: Omit<BlogPagination, 'blogs'> & { blogs?: Maybe<Array<ResolversParentTypes['Blog']>> };
  Boolean: Scalars['Boolean']['output'];
  Category: CategoryModel;
  Comment: CommentModel;
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Like: LikeModel;
  Mutation: {};
  Query: {};
  String: Scalars['String']['output'];
  User: UserModel;
  View: ViewModel;
}>;

export type AuthResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['AuthResponse'] = ResolversParentTypes['AuthResponse']> = ResolversObject<{
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BlogResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Blog'] = ResolversParentTypes['Blog']> = ResolversObject<{
  category?: Resolver<ResolversTypes['Category'], ParentType, ContextType>;
  comments?: Resolver<Maybe<Array<ResolversTypes['Comment']>>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  imageUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  number_of_likes?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  number_of_views?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['Status'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  userMadeLike?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BlogPaginationResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['BlogPagination'] = ResolversParentTypes['BlogPagination']> = ResolversObject<{
  blogs?: Resolver<Maybe<Array<ResolversTypes['Blog']>>, ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CategoryResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Category'] = ResolversParentTypes['Category']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CommentResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Comment'] = ResolversParentTypes['Comment']> = ResolversObject<{
  blogId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LikeResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Like'] = ResolversParentTypes['Like']> = ResolversObject<{
  blogId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  createBlog?: Resolver<ResolversTypes['Blog'], ParentType, ContextType, RequireFields<MutationCreateBlogArgs, 'categoryName' | 'description' | 'title' | 'userId'>>;
  createCategory?: Resolver<ResolversTypes['Category'], ParentType, ContextType, RequireFields<MutationCreateCategoryArgs, 'name'>>;
  createComment?: Resolver<ResolversTypes['Comment'], ParentType, ContextType, RequireFields<MutationCreateCommentArgs, 'blogId' | 'content' | 'userId'>>;
  createLike?: Resolver<ResolversTypes['Like'], ParentType, ContextType, RequireFields<MutationCreateLikeArgs, 'blogId' | 'userId'>>;
  createView?: Resolver<ResolversTypes['View'], ParentType, ContextType, RequireFields<MutationCreateViewArgs, 'blogId' | 'userId'>>;
  deleteBlog?: Resolver<ResolversTypes['Blog'], ParentType, ContextType, RequireFields<MutationDeleteBlogArgs, 'blogId'>>;
  deleteLike?: Resolver<ResolversTypes['Like'], ParentType, ContextType, RequireFields<MutationDeleteLikeArgs, 'blogId' | 'userId'>>;
  login?: Resolver<ResolversTypes['AuthResponse'], ParentType, ContextType, RequireFields<MutationLoginArgs, 'username'>>;
  register?: Resolver<ResolversTypes['AuthResponse'], ParentType, ContextType, RequireFields<MutationRegisterArgs, 'email' | 'username'>>;
  updateBlog?: Resolver<ResolversTypes['Blog'], ParentType, ContextType, RequireFields<MutationUpdateBlogArgs, 'blogId'>>;
  updateBlogStatus?: Resolver<ResolversTypes['Blog'], ParentType, ContextType, RequireFields<MutationUpdateBlogStatusArgs, 'blogId'>>;
}>;

export type QueryResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  getBlog?: Resolver<Maybe<ResolversTypes['Blog']>, ParentType, ContextType, RequireFields<QueryGetBlogArgs, 'blogId' | 'userId'>>;
  getBlogs?: Resolver<Maybe<ResolversTypes['BlogPagination']>, ParentType, ContextType, Partial<QueryGetBlogsArgs>>;
  getBlogsBySearchQuery?: Resolver<Maybe<ResolversTypes['BlogPagination']>, ParentType, ContextType, Partial<QueryGetBlogsBySearchQueryArgs>>;
  getBlogsByUser?: Resolver<Maybe<Array<ResolversTypes['Blog']>>, ParentType, ContextType, RequireFields<QueryGetBlogsByUserArgs, 'userId'>>;
  getCategories?: Resolver<Maybe<Array<ResolversTypes['Category']>>, ParentType, ContextType>;
  getUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryGetUserArgs, 'userId'>>;
}>;

export type UserResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  blogs?: Resolver<Maybe<Array<ResolversTypes['Blog']>>, ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  imageUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  role?: Resolver<ResolversTypes['Role'], ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ViewResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['View'] = ResolversParentTypes['View']> = ResolversObject<{
  blogId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = DataSourceContext> = ResolversObject<{
  AuthResponse?: AuthResponseResolvers<ContextType>;
  Blog?: BlogResolvers<ContextType>;
  BlogPagination?: BlogPaginationResolvers<ContextType>;
  Category?: CategoryResolvers<ContextType>;
  Comment?: CommentResolvers<ContextType>;
  Like?: LikeResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  View?: ViewResolvers<ContextType>;
}>;

