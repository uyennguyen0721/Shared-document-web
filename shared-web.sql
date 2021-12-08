USE [master]
GO
/****** Object:  Database [sharedweb]    Script Date: 12/8/2021 10:50:46 AM ******/
CREATE DATABASE [sharedweb]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'sharedweb', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL12.SQLEXPRESS\MSSQL\DATA\sharedweb.mdf' , SIZE = 4096KB , MAXSIZE = UNLIMITED, FILEGROWTH = 1024KB )
 LOG ON 
( NAME = N'sharedweb_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL12.SQLEXPRESS\MSSQL\DATA\sharedweb_log.ldf' , SIZE = 1024KB , MAXSIZE = 2048GB , FILEGROWTH = 10%)
GO
ALTER DATABASE [sharedweb] SET COMPATIBILITY_LEVEL = 120
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [sharedweb].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [sharedweb] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [sharedweb] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [sharedweb] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [sharedweb] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [sharedweb] SET ARITHABORT OFF 
GO
ALTER DATABASE [sharedweb] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [sharedweb] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [sharedweb] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [sharedweb] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [sharedweb] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [sharedweb] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [sharedweb] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [sharedweb] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [sharedweb] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [sharedweb] SET  DISABLE_BROKER 
GO
ALTER DATABASE [sharedweb] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [sharedweb] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [sharedweb] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [sharedweb] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [sharedweb] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [sharedweb] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [sharedweb] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [sharedweb] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [sharedweb] SET  MULTI_USER 
GO
ALTER DATABASE [sharedweb] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [sharedweb] SET DB_CHAINING OFF 
GO
ALTER DATABASE [sharedweb] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [sharedweb] SET TARGET_RECOVERY_TIME = 0 SECONDS 
GO
ALTER DATABASE [sharedweb] SET DELAYED_DURABILITY = DISABLED 
GO
USE [sharedweb]
GO
/****** Object:  Table [dbo].[Comments]    Script Date: 12/8/2021 10:50:46 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Comments](
	[CommentId] [int] IDENTITY(1,1) NOT NULL,
	[CommentDate] [datetime2](7) NOT NULL,
	[UserId] [int] NULL,
	[DocumentId] [int] NULL,
	[Contents] [nvarchar](255) NULL,
 CONSTRAINT [PK_Comments] PRIMARY KEY CLUSTERED 
(
	[CommentId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Documents]    Script Date: 12/8/2021 10:50:46 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Documents](
	[DocumentId] [int] IDENTITY(1,1) NOT NULL,
	[DocumentName] [varchar](100) NULL,
	[Description] [nvarchar](255) NULL,
	[UploadDate] [datetime2](7) NOT NULL,
	[Is_check] [bit] NOT NULL,
	[Views] [int] NOT NULL,
	[DocumentTypeId] [int] NULL,
	[SubjectId] [int] NULL,
	[File_source] [nvarchar](255) NULL,
 CONSTRAINT [PK_Documents] PRIMARY KEY CLUSTERED 
(
	[DocumentId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[DocumentTypes]    Script Date: 12/8/2021 10:50:46 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[DocumentTypes](
	[DocumentTypeId] [int] IDENTITY(1,1) NOT NULL,
	[DocumentTypeName] [nvarchar](50) NULL,
 CONSTRAINT [PK_DocumentTypes] PRIMARY KEY CLUSTERED 
(
	[DocumentTypeId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Downloads]    Script Date: 12/8/2021 10:50:46 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Downloads](
	[DownloadId] [int] IDENTITY(1,1) NOT NULL,
	[DownloadDate] [datetime2](7) NOT NULL,
	[UserId] [int] NULL,
	[DocumentId] [int] NULL,
 CONSTRAINT [PK_Downloads] PRIMARY KEY CLUSTERED 
(
	[DownloadId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Histories]    Script Date: 12/8/2021 10:50:46 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Histories](
	[HistoryId] [int] IDENTITY(1,1) NOT NULL,
	[Time] [datetime2](7) NOT NULL,
	[Content] [nvarchar](255) NULL,
	[UserId] [int] NULL,
 CONSTRAINT [PK_Histories] PRIMARY KEY CLUSTERED 
(
	[HistoryId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Likes]    Script Date: 12/8/2021 10:50:46 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Likes](
	[LikeId] [int] IDENTITY(1,1) NOT NULL,
	[LikeDate] [datetime2](7) NOT NULL,
	[UserId] [int] NULL,
	[DocumentId] [int] NULL,
 CONSTRAINT [PK_Likes] PRIMARY KEY CLUSTERED 
(
	[LikeId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Subjects]    Script Date: 12/8/2021 10:50:46 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Subjects](
	[SubjectId] [int] IDENTITY(1,1) NOT NULL,
	[SubjectName] [nvarchar](100) NULL,
 CONSTRAINT [PK_Subjects] PRIMARY KEY CLUSTERED 
(
	[SubjectId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[UserRoles]    Script Date: 12/8/2021 10:50:46 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UserRoles](
	[UserRoleId] [int] IDENTITY(1,1) NOT NULL,
	[UserRoleName] [nvarchar](50) NULL,
 CONSTRAINT [PK_UserRoles] PRIMARY KEY CLUSTERED 
(
	[UserRoleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Users]    Script Date: 12/8/2021 10:50:46 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[UserId] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](100) NULL,
	[Username] [nvarchar](50) NULL,
	[Password] [nvarchar](50) NULL,
	[Avatar] [nvarchar](255) NULL,
	[Email] [nvarchar](100) NULL,
	[Birthday] [datetime2](7) NULL,
	[Gender] [nvarchar](10) NULL,
	[Is_active] [bit] NOT NULL,
	[Joined_date] [datetime2](7) NOT NULL,
	[Userrole] [int] NOT NULL,
	[UserRoleId] [int] NULL,
 CONSTRAINT [PK_Users] PRIMARY KEY CLUSTERED 
(
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET IDENTITY_INSERT [dbo].[DocumentTypes] ON 

INSERT [dbo].[DocumentTypes] ([DocumentTypeId], [DocumentTypeName]) VALUES (1, N'Word')
INSERT [dbo].[DocumentTypes] ([DocumentTypeId], [DocumentTypeName]) VALUES (2, N'PDF')
INSERT [dbo].[DocumentTypes] ([DocumentTypeId], [DocumentTypeName]) VALUES (3, N'PowerPoint')
INSERT [dbo].[DocumentTypes] ([DocumentTypeId], [DocumentTypeName]) VALUES (4, N'Excel')
SET IDENTITY_INSERT [dbo].[DocumentTypes] OFF
SET IDENTITY_INSERT [dbo].[Subjects] ON 

INSERT [dbo].[Subjects] ([SubjectId], [SubjectName]) VALUES (1, N'Toán')
INSERT [dbo].[Subjects] ([SubjectId], [SubjectName]) VALUES (2, N'Vật lý')
INSERT [dbo].[Subjects] ([SubjectId], [SubjectName]) VALUES (3, N'Hóa học')
INSERT [dbo].[Subjects] ([SubjectId], [SubjectName]) VALUES (4, N'Sinh học')
INSERT [dbo].[Subjects] ([SubjectId], [SubjectName]) VALUES (5, N'Ngữ văn')
INSERT [dbo].[Subjects] ([SubjectId], [SubjectName]) VALUES (6, N'Lịch sử')
INSERT [dbo].[Subjects] ([SubjectId], [SubjectName]) VALUES (7, N'Địa lý')
INSERT [dbo].[Subjects] ([SubjectId], [SubjectName]) VALUES (8, N'Công dân')
INSERT [dbo].[Subjects] ([SubjectId], [SubjectName]) VALUES (9, N'Công nghệ')
INSERT [dbo].[Subjects] ([SubjectId], [SubjectName]) VALUES (10, N'Tin học')
INSERT [dbo].[Subjects] ([SubjectId], [SubjectName]) VALUES (11, N'Tiếng Anh')
INSERT [dbo].[Subjects] ([SubjectId], [SubjectName]) VALUES (12, N'Mỹ thuật')
INSERT [dbo].[Subjects] ([SubjectId], [SubjectName]) VALUES (13, N'Âm nhạc')
INSERT [dbo].[Subjects] ([SubjectId], [SubjectName]) VALUES (15, N'Thiên văn học')
INSERT [dbo].[Subjects] ([SubjectId], [SubjectName]) VALUES (16, N'Địa chất học')
SET IDENTITY_INSERT [dbo].[Subjects] OFF
SET IDENTITY_INSERT [dbo].[UserRoles] ON 

INSERT [dbo].[UserRoles] ([UserRoleId], [UserRoleName]) VALUES (1, N'Admin')
INSERT [dbo].[UserRoles] ([UserRoleId], [UserRoleName]) VALUES (2, N'User')
SET IDENTITY_INSERT [dbo].[UserRoles] OFF
/****** Object:  Index [IX_Comments_DocumentId]    Script Date: 12/8/2021 10:50:46 AM ******/
CREATE NONCLUSTERED INDEX [IX_Comments_DocumentId] ON [dbo].[Comments]
(
	[DocumentId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_Comments_UserId]    Script Date: 12/8/2021 10:50:46 AM ******/
CREATE NONCLUSTERED INDEX [IX_Comments_UserId] ON [dbo].[Comments]
(
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_Documents_DocumentTypeId]    Script Date: 12/8/2021 10:50:46 AM ******/
CREATE NONCLUSTERED INDEX [IX_Documents_DocumentTypeId] ON [dbo].[Documents]
(
	[DocumentTypeId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_Documents_SubjectId]    Script Date: 12/8/2021 10:50:46 AM ******/
CREATE NONCLUSTERED INDEX [IX_Documents_SubjectId] ON [dbo].[Documents]
(
	[SubjectId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_Downloads_DocumentId]    Script Date: 12/8/2021 10:50:46 AM ******/
CREATE NONCLUSTERED INDEX [IX_Downloads_DocumentId] ON [dbo].[Downloads]
(
	[DocumentId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_Downloads_UserId]    Script Date: 12/8/2021 10:50:46 AM ******/
CREATE NONCLUSTERED INDEX [IX_Downloads_UserId] ON [dbo].[Downloads]
(
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_Histories_UserId]    Script Date: 12/8/2021 10:50:46 AM ******/
CREATE NONCLUSTERED INDEX [IX_Histories_UserId] ON [dbo].[Histories]
(
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_Likes_DocumentId]    Script Date: 12/8/2021 10:50:46 AM ******/
CREATE NONCLUSTERED INDEX [IX_Likes_DocumentId] ON [dbo].[Likes]
(
	[DocumentId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_Likes_UserId]    Script Date: 12/8/2021 10:50:46 AM ******/
CREATE NONCLUSTERED INDEX [IX_Likes_UserId] ON [dbo].[Likes]
(
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_Users_UserRoleId]    Script Date: 12/8/2021 10:50:46 AM ******/
CREATE NONCLUSTERED INDEX [IX_Users_UserRoleId] ON [dbo].[Users]
(
	[UserRoleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Comments]  WITH CHECK ADD  CONSTRAINT [FK_Comments_Documents_DocumentId] FOREIGN KEY([DocumentId])
REFERENCES [dbo].[Documents] ([DocumentId])
GO
ALTER TABLE [dbo].[Comments] CHECK CONSTRAINT [FK_Comments_Documents_DocumentId]
GO
ALTER TABLE [dbo].[Comments]  WITH CHECK ADD  CONSTRAINT [FK_Comments_Users_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[Users] ([UserId])
GO
ALTER TABLE [dbo].[Comments] CHECK CONSTRAINT [FK_Comments_Users_UserId]
GO
ALTER TABLE [dbo].[Documents]  WITH CHECK ADD  CONSTRAINT [FK_Documents_DocumentTypes_DocumentTypeId] FOREIGN KEY([DocumentTypeId])
REFERENCES [dbo].[DocumentTypes] ([DocumentTypeId])
GO
ALTER TABLE [dbo].[Documents] CHECK CONSTRAINT [FK_Documents_DocumentTypes_DocumentTypeId]
GO
ALTER TABLE [dbo].[Documents]  WITH CHECK ADD  CONSTRAINT [FK_Documents_Subjects_SubjectId] FOREIGN KEY([SubjectId])
REFERENCES [dbo].[Subjects] ([SubjectId])
GO
ALTER TABLE [dbo].[Documents] CHECK CONSTRAINT [FK_Documents_Subjects_SubjectId]
GO
ALTER TABLE [dbo].[Downloads]  WITH CHECK ADD  CONSTRAINT [FK_Downloads_Documents_DocumentId] FOREIGN KEY([DocumentId])
REFERENCES [dbo].[Documents] ([DocumentId])
GO
ALTER TABLE [dbo].[Downloads] CHECK CONSTRAINT [FK_Downloads_Documents_DocumentId]
GO
ALTER TABLE [dbo].[Downloads]  WITH CHECK ADD  CONSTRAINT [FK_Downloads_Users_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[Users] ([UserId])
GO
ALTER TABLE [dbo].[Downloads] CHECK CONSTRAINT [FK_Downloads_Users_UserId]
GO
ALTER TABLE [dbo].[Histories]  WITH CHECK ADD  CONSTRAINT [FK_Histories_Users_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[Users] ([UserId])
GO
ALTER TABLE [dbo].[Histories] CHECK CONSTRAINT [FK_Histories_Users_UserId]
GO
ALTER TABLE [dbo].[Likes]  WITH CHECK ADD  CONSTRAINT [FK_Likes_Documents_DocumentId] FOREIGN KEY([DocumentId])
REFERENCES [dbo].[Documents] ([DocumentId])
GO
ALTER TABLE [dbo].[Likes] CHECK CONSTRAINT [FK_Likes_Documents_DocumentId]
GO
ALTER TABLE [dbo].[Likes]  WITH CHECK ADD  CONSTRAINT [FK_Likes_Users_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[Users] ([UserId])
GO
ALTER TABLE [dbo].[Likes] CHECK CONSTRAINT [FK_Likes_Users_UserId]
GO
ALTER TABLE [dbo].[Users]  WITH CHECK ADD  CONSTRAINT [FK_Users_UserRoles_UserRoleId] FOREIGN KEY([UserRoleId])
REFERENCES [dbo].[UserRoles] ([UserRoleId])
GO
ALTER TABLE [dbo].[Users] CHECK CONSTRAINT [FK_Users_UserRoles_UserRoleId]
GO
USE [master]
GO
ALTER DATABASE [sharedweb] SET  READ_WRITE 
GO
