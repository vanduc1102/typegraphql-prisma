(self.webpackChunktypegraphql_prisma_website=self.webpackChunktypegraphql_prisma_website||[]).push([[242],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(t),m=a,g=c["".concat(l,".").concat(m)]||c[m]||d[m]||s;return t?r.createElement(g,i(i({ref:n},u),{},{components:t})):r.createElement(g,i({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,i=new Array(s);i[0]=c;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<s;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},6067:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var r=t(2122),a=t(9756),s=(t(7294),t(3905)),i={title:"Usage",sidebar_position:3},o=void 0,l={unversionedId:"basics/usage",id:"basics/usage",isDocsHomePage:!1,title:"Usage",description:"Having installed all the deps and configured the Prisma generator, let's see the capabilities of typegraphql-prisma.",source:"@site/../docs/basics/usage.md",sourceDirName:"basics",slug:"/basics/usage",permalink:"/docs/basics/usage",editUrl:"https://github.com/MichalLytek/typegraphql-prisma/edit/main/docs/../docs/basics/usage.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Usage",sidebar_position:3},sidebar:"docs",previous:{title:"Configuration",permalink:"/docs/basics/configuration"},next:{title:"Prisma version check",permalink:"/docs/basics/prisma-version"}},p=[{value:"Showcase",id:"showcase",children:[]},{value:"CRUD resolvers",id:"crud-resolvers",children:[]},{value:"Relations resolvers",id:"relations-resolvers",children:[]},{value:"Bootstrapping",id:"bootstrapping",children:[]},{value:"Context configuration",id:"context-configuration",children:[]}],u={toc:p};function d(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Having installed all the deps and configured the Prisma generator, let's see the capabilities of ",(0,s.kt)("inlineCode",{parentName:"p"},"typegraphql-prisma"),"."),(0,s.kt)("h2",{id:"showcase"},"Showcase"),(0,s.kt)("p",null,"Let's assume you have this statements in your Prisma schema:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-prisma",metastring:"title=prisma/schema.prisma",title:"prisma/schema.prisma"},"enum UserKind {\n  NORMAL\n  ADMIN\n}\n\nmodel User {\n  id    String  @default(cuid()) @id @unique\n  email String  @unique\n  age   Int?\n  kind  UserKind\n}\n")),(0,s.kt)("p",null,"It will generate a ",(0,s.kt)("inlineCode",{parentName:"p"},"User")," class (with TypeGraphQL decorators) in the output folder and an enum:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=generated/type-graphql/enums/UserKind.ts",title:"generated/type-graphql/enums/UserKind.ts"},'export enum UserKind {\n  NORMAL = "NORMAL",\n  ADMIN = "ADMIN",\n}\nTypeGraphQL.registerEnumType(UserKind, {\n  name: "UserKind",\n  description: undefined,\n});\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=generated/type-graphql/models/User.ts",title:"generated/type-graphql/models/User.ts"},"@TypeGraphQL.ObjectType({\n  isAbstract: true,\n  description: undefined,\n})\nexport class User {\n  @TypeGraphQL.Field(_type => String, {\n    nullable: false,\n    description: undefined,\n  })\n  id!: string;\n\n  @TypeGraphQL.Field(_type => String, {\n    nullable: false,\n    description: undefined,\n  })\n  email!: string;\n\n  @TypeGraphQL.Field(_type => Int, {\n    nullable: true,\n    description: undefined,\n  })\n  age?: number | null;\n\n  @TypeGraphQL.Field(_type => UserKind, {\n    nullable: false,\n    description: undefined,\n  })\n  kind!: UserKind;\n}\n")),(0,s.kt)("p",null,"You can import them and use normally as a type or an explicit type in your resolvers, e.g:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=src/custom-resolver.ts",title:"src/custom-resolver.ts"},'import {\n  User,\n  UserWhereUniqueInput,\n  UserKind,\n} from "../generated/type-graphql";\n\n@Resolver()\nclass CustomUserResolver {\n  @Mutation(() => User)\n  changeUserKind(\n    @Arg("where") where: UserWhereUniqueInput,\n    @Arg("kind") kind: UserKind,\n  ) {\n    log.info("Changing user kind", { where, kind });\n    return prisma.user.update({ where, data: { kind } });\n  }\n}\n')),(0,s.kt)("p",null,"However, it will also generates a whole bunch of stuffs based on your ",(0,s.kt)("inlineCode",{parentName:"p"},"schema.prisma")," file - not only models classes and enums but also input types, arguments, CRUD resolvers and relations resolver."),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Main concept")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"The design goal of TypeGraphQL Prisma integration is to generate all the building blocks that you can then use to quickly build your domain logic using custom resolvers."),(0,s.kt)("p",{parentName:"div"},"However, it can also generate some resolvers which might be handy especially on the prototyping phase or on the early stage, when the customization options are not limiting yet."))),(0,s.kt)("h2",{id:"crud-resolvers"},"CRUD resolvers"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"typegraphql-prisma")," generator also can emit CRUD resolvers. The API is almost 1:1 matching with the ",(0,s.kt)("inlineCode",{parentName:"p"},"PrismaClient")," API and supports this following methods with their args:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"findUnique"),(0,s.kt)("li",{parentName:"ul"},"findFirst"),(0,s.kt)("li",{parentName:"ul"},"findMany"),(0,s.kt)("li",{parentName:"ul"},"create"),(0,s.kt)("li",{parentName:"ul"},"createMany"),(0,s.kt)("li",{parentName:"ul"},"update"),(0,s.kt)("li",{parentName:"ul"},"updateMany"),(0,s.kt)("li",{parentName:"ul"},"delete"),(0,s.kt)("li",{parentName:"ul"},"deleteMany"),(0,s.kt)("li",{parentName:"ul"},"upsert"),(0,s.kt)("li",{parentName:"ul"},"aggregate"),(0,s.kt)("li",{parentName:"ul"},"groupBy")),(0,s.kt)("p",null,"An example of a crud resolver file content:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=generated/type-graphql/resolvers/crud/User/UserCrudResolver.ts",title:"generated/type-graphql/resolvers/crud/User/UserCrudResolver.ts"},"@TypeGraphQL.Resolver(_of => User)\nexport class UserCrudResolver {\n  @TypeGraphQL.Query(_returns => [User], {\n    nullable: false,\n  })\n  async users(\n    @TypeGraphQL.Ctx() ctx: any,\n    @TypeGraphQL.Info() info: GraphQLResolveInfo,\n    @TypeGraphQL.Args() args: FindManyUserArgs,\n  ): Promise<User[]> {\n    const { _count } = transformFields(graphqlFields(info as any));\n    return getPrismaFromContext(ctx).user.findMany({\n      ...args,\n      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),\n    });\n  }\n\n  @TypeGraphQL.Mutation(_returns => User, {\n    nullable: false,\n  })\n  async createUser(\n    @TypeGraphQL.Ctx() ctx: any,\n    @TypeGraphQL.Info() info: GraphQLResolveInfo,\n    @TypeGraphQL.Args() args: CreateUserArgs,\n  ): Promise<User> {\n    const { _count } = transformFields(graphqlFields(info as any));\n    return getPrismaFromContext(ctx).user.create({\n      ...args,\n      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),\n    });\n  }\n\n  // more methods goes here...\n}\n")),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"By default, the method names will be mapped to a GraphQL idiomatic ones (like ",(0,s.kt)("inlineCode",{parentName:"p"},"findManyUser")," -> ",(0,s.kt)("inlineCode",{parentName:"p"},"users"),")."),(0,s.kt)("p",{parentName:"div"},"You can opt-in to use original names by providing ",(0,s.kt)("inlineCode",{parentName:"p"},"useOriginalMapping = true")," generator option."))),(0,s.kt)("h2",{id:"relations-resolvers"},"Relations resolvers"),(0,s.kt)("p",null,"TypeGraphQL Prisma integration also generates resolvers that are resolving the relations between Prisma models.\nThanks to that, you don't need to write any field resolvers by yourself in order to register relation fields in GraphQL schema."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=generated/type-graphql/resolvers/relations/User/UserRelationsResolver.ts",title:"generated/type-graphql/resolvers/relations/User/UserRelationsResolver.ts"},"@TypeGraphQL.Resolver(_of => User)\nexport class UserRelationsResolver {\n  @TypeGraphQL.FieldResolver(_type => [Post], {\n    nullable: false,\n  })\n  async posts(\n    @TypeGraphQL.Root() user: User,\n    @TypeGraphQL.Ctx() ctx: any,\n    @TypeGraphQL.Args() args: UserPostsArgs,\n  ): Promise<Post[]> {\n    return getPrismaFromContext(ctx)\n      .user.findUnique({\n        where: {\n          id: user.id,\n        },\n      })\n      .posts(args);\n  }\n}\n")),(0,s.kt)("p",null,"The generated relation resolvers also supports providing arguments that allows you to filter, sort and paginate over the relation list items."),(0,s.kt)("h2",{id:"bootstrapping"},"Bootstrapping"),(0,s.kt)("p",null,"The fastest way to expose all Prisma CRUD actions is to import ",(0,s.kt)("inlineCode",{parentName:"p"},"resolvers")," from the output folder and just use it in the ",(0,s.kt)("inlineCode",{parentName:"p"},"buildSchema")," function known from TypeGraphQL:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{1,4}","{1,4}":!0},'import { resolvers } from "@generated/type-graphql";\n\nconst schema = await buildSchema({\n  resolvers,\n  validate: false,\n});\n')),(0,s.kt)("p",null,"With this approach you will emit all CRUD actions and model relations in the schema."),(0,s.kt)("p",null,"If you need more control, you can import the ",(0,s.kt)("inlineCode",{parentName:"p"},"crudResolvers")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"relationResolvers")," arrays separately:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},'import { crudResolvers, relationResolvers } from "@generated/type-graphql";\n')),(0,s.kt)("p",null,"to even transform them dynamically (e.g. excluding all with ",(0,s.kt)("inlineCode",{parentName:"p"},"User")," in name)."),(0,s.kt)("h2",{id:"context-configuration"},"Context configuration"),(0,s.kt)("p",null,"When using the generated resolvers, you have to first provide the ",(0,s.kt)("inlineCode",{parentName:"p"},"PrismaClient")," instance into the context under ",(0,s.kt)("inlineCode",{parentName:"p"},"prisma")," key, to make it available for the crud and relations resolvers:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{3,8}","{3,8}":!0},'import { PrismaClient } from "@prisma/client";\n\nconst prisma = new PrismaClient();\n\nconst server = new ApolloServer({\n  schema, // from previous step\n  playground: true,\n  context: () => ({ prisma }),\n});\n')))}d.isMDXComponent=!0}}]);