﻿using FluentValidation;
using SharedPhotoAlbum.Application.Common.Interfaces;

namespace SharedPhotoAlbum.Application.Posts.Commands.CreatePost
{
    public class CreatePostCommandValidator : AbstractValidator<CreatePostCommand>
    {
        private readonly IApplicationDbContext _context;

        public CreatePostCommandValidator(IApplicationDbContext context)
        {
            _context = context;

            RuleFor(v => v.Text)
                .NotEmpty().WithMessage("Post text is required.")
                .MaximumLength(1000).WithMessage("Post text must not exceed 1000 characters.");

            RuleFor(v => v.FeedId)
                .NotEmpty().WithMessage("Post must be related to a feed.");
            // .MustAsync(BeUniqueTitle).WithMessage("The specified title already exists.");
        }

        // public async Task<bool> BeUniqueTitle(string title, CancellationToken cancellationToken)
        // {
        //     return await _context.Posts
        //         .AllAsync(l => l.Title != title);
        // }
    }
}