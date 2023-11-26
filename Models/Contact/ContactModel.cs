

using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CinemaProject.Models.Contacts
{
    public class ContactModel
    {
        [Key]
        public int Id {set;get;}
        

        [Required(ErrorMessage = "phải nhập {0}")]
        [Column(TypeName = "nvarchar")]
        [StringLength(50)]
        [Display(Name = "Họ Tên")]
        public string FullName {set;get;}

        [StringLength(100)]
        [Required(ErrorMessage = "phải nhập {0}")]
        [EmailAddress(ErrorMessage = "Sai định dạng Email")]
        [Display(Name = "Địa Chỉ Email")]
        public string Email {set;get;}

        [Required(ErrorMessage = "phải nhập {0}")]
        [Phone(ErrorMessage = "Sai định dạng số điện thoại")]
        [StringLength(50)]
        [Display(Name = "Số Điện Thoại")]
        public string Phone {set;get;}

        public DateTime DataSend {set;get;}

        [Required(ErrorMessage = "phải nhập {0}")]
        [Display(Name = "Nội Dung Góp Ý")]
        public string Message {set;get;}


        
    }
    
}