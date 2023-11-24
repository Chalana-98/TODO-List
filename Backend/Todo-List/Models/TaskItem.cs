using System;
using System.ComponentModel.DataAnnotations;

namespace Todo_List.Models
{
    public class TaskItem
    {
        [Key]
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime CreateDate { get; set; }

        public bool IsCompleted { get; set; } // Status or IsCompleted field

        public PriorityType Priority { get; set; } // Priority field using enum
        public int UserId { get; set; } // User ID field
    }

    public enum PriorityType
    {
        Low,
        Medium,
        High
        // Add other priority levels as needed
    }

    // Add other models or logic related to the owner or any other entities if required
}
