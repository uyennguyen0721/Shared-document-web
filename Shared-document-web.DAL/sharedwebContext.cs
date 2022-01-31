using Microsoft.EntityFrameworkCore;

#nullable disable

namespace Shared_document_web.DAL.Models
{
    public partial class sharedwebContext : DbContext
    {
        public sharedwebContext()
        {
        }

        public sharedwebContext(DbContextOptions<sharedwebContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Comment> Comments { get; set; }
        public virtual DbSet<Document> Documents { get; set; }
        public virtual DbSet<DocumentType> DocumentTypes { get; set; }
        public virtual DbSet<Download> Downloads { get; set; }
        public virtual DbSet<Like> Likes { get; set; }
        public virtual DbSet<Subject> Subjects { get; set; }
        public virtual DbSet<User> Users { get; set; }
        public virtual DbSet<UserRole> UserRoles { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Data Source=DESKTOP-67AN4PI;Initial Catalog=sharedweb;Persist Security Info=True;User ID=sa;Password=12345678;Pooling=False;MultipleActiveResultSets=False;Encrypt=False;TrustServerCertificate=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Comment>(entity =>
            {
                entity.HasIndex(e => e.DocumentId, "IX_Comments_DocumentId");

                entity.HasIndex(e => e.UserId, "IX_Comments_UserId");

                entity.Property(e => e.Contents).HasMaxLength(255);

                entity.HasOne(d => d.Document)
                    .WithMany(p => p.Comments)
                    .HasForeignKey(d => d.DocumentId);

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Comments)
                    .HasForeignKey(d => d.UserId);
            });

            modelBuilder.Entity<Document>(entity =>
            {
                entity.HasIndex(e => e.DocumentTypeId, "IX_Documents_DocumentTypeId");

                entity.HasIndex(e => e.SubjectId, "IX_Documents_SubjectId");

                entity.Property(e => e.DocumentName).HasMaxLength(50);

                entity.Property(e => e.FileSource)
                    .HasMaxLength(255)
                    .HasColumnName("File_source");

                entity.Property(e => e.ImagePreview).HasMaxLength(50);

                entity.Property(e => e.IsCheck).HasColumnName("Is_check");

                entity.HasOne(d => d.DocumentType)
                    .WithMany(p => p.Documents)
                    .HasForeignKey(d => d.DocumentTypeId);

                entity.HasOne(d => d.Subject)
                    .WithMany(p => p.Documents)
                    .HasForeignKey(d => d.SubjectId);

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Documents)
                    .HasForeignKey(d => d.UserId);
            });

            modelBuilder.Entity<DocumentType>(entity =>
            {
                entity.Property(e => e.DocumentTypeName).HasMaxLength(50);
            });

            modelBuilder.Entity<Download>(entity =>
            {
                entity.HasIndex(e => e.DocumentId, "IX_Downloads_DocumentId");

                entity.HasIndex(e => e.UserId, "IX_Downloads_UserId");

                entity.HasOne(d => d.Document)
                    .WithMany(p => p.Downloads)
                    .HasForeignKey(d => d.DocumentId);

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Downloads)
                    .HasForeignKey(d => d.UserId);
            });

            modelBuilder.Entity<Like>(entity =>
            {
                entity.HasIndex(e => e.DocumentId, "IX_Likes_DocumentId");

                entity.HasIndex(e => e.UserId, "IX_Likes_UserId");

                entity.HasOne(d => d.Document)
                    .WithMany(p => p.Likes)
                    .HasForeignKey(d => d.DocumentId);

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Likes)
                    .HasForeignKey(d => d.UserId);
            });

            modelBuilder.Entity<Subject>(entity =>
            {
                entity.Property(e => e.SubjectName).HasMaxLength(100);
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.HasIndex(e => e.UserRoleId, "IX_Users_UserRoleId");

                entity.Property(e => e.Avatar).HasMaxLength(255);

                entity.Property(e => e.Email).HasMaxLength(100);

                entity.Property(e => e.Gender).HasMaxLength(10);

                entity.Property(e => e.IsActive).HasColumnName("Is_active");

                entity.Property(e => e.JoinedDate).HasColumnName("Joined_date");

                entity.Property(e => e.Name).HasMaxLength(100);

                entity.Property(e => e.Password).HasMaxLength(50);

                entity.Property(e => e.Username).HasMaxLength(50);

                entity.HasOne(d => d.UserRole)
                    .WithMany(p => p.Users)
                    .HasForeignKey(d => d.UserRoleId);
            });

            modelBuilder.Entity<UserRole>(entity =>
            {
                entity.Property(e => e.UserRoleName).HasMaxLength(50);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
