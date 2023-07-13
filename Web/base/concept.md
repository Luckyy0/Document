```
Caching
```  
Bộ nhớ đệm là một kỹ thuật lưu trữ dữ liệu hoặc thông tin được sử dụng thường xuyên trong bộ nhớ cục bộ trong một khoảng thời gian nhất định.   
Vì vậy, lần tới, khi máy khách yêu cầu thông tin tương tự, thay vì truy xuất thông tin từ cơ sở dữ liệu, nó sẽ cung cấp thông tin từ bộ nhớ cục bộ.  
Ưu điểm chính của bộ nhớ đệm là nó cải thiện hiệu suất bằng cách giảm gánh nặng xử lý.  
- Bộ nhớ đệm phía client  
    Bộ nhớ đệm phía máy khách là lưu trữ dữ liệu mạng vào bộ đệm cục bộ để sử dụng lại trong tương lai.  
    Sau khi một ứng dụng tìm nạp dữ liệu mạng, nó sẽ lưu trữ tài nguyên đó trong bộ đệm cục bộ.  
    Sau khi tài nguyên đã được lưu vào bộ đệm, trình duyệt sẽ sử dụng bộ đệm cho các yêu cầu trong tương lai đối với tài nguyên đó để tăng hiệu suất.  
- Bộ nhớ đệm phía server  
    Khi người dùng yêu cầu trang web lần đầu tiên, trang web sẽ thực hiện quy trình truy xuất dữ liệu bình thường từ máy chủ và tạo hoặc xây dựng trang web của trang web. Sau khi yêu cầu đã xảy ra và phản hồi đã được gửi lại, máy chủ sẽ sao chép trang web và lưu trữ dưới dạng bộ đệm.  
    Lần tới khi người dùng truy cập lại trang web, nó sẽ tải bản sao đã lưu hoặc đã lưu trong bộ nhớ cache của trang web, do đó làm cho trang web nhanh hơn.  
- CDN - Content Delivery Network - Mạng phân phối nội dung  
    Nhằm cung cấp tính khả dụng cao và cải thiện hiệu suất của các trang web. Điều này đạt được với việc phân phối nhanh nội dung và nội dung trang web thường thông qua các điểm cuối gần hơn về mặt địa lý với yêu cầu của khách hàng. CDN thương mại truyền thống (Amazon CloudFront, Akamai, CloudFlare và Fastly) cung cấp các máy chủ trên toàn cầu có thể được sử dụng cho mục đích này. Cung cấp nội dung và nội dung thông qua CDN giúp giảm băng thông lưu trữ trang web, cung cấp thêm một lớp bộ nhớ đệm để giảm khả năng ngừng hoạt động và cũng có thể cải thiện bảo mật trang web

```
Web security
```
- Thuật toán Hashing  
    - Scrypt   
    Là một hàm băm mật khẩu (như bcrypt).   
    Nó được thiết kế để sử dụng nhiều phần cứng, khiến cho các cuộc tấn công brute-force trở nên khó khăn hơn  
    Chủ yếu được sử dụng làm thuật toán chứng minh công việc cho tiền điện tử.  
    - Bcrypt  
    Là một hàm băm mật khẩu  
    - SHA family  
    Là một nhóm các hàm băm mật mã  
    - MD5  
    Là một hàm băm hiện không được sử dụng do có nhiều lỗ hổng  
- HTTPS  
    HTTPS là một cách an toàn để gửi dữ liệu giữa máy chủ web và trình duyệt.  
    Giao tiếp qua HTTPS bắt đầu bằng giai đoạn bắt tay trong đó máy chủ và máy khách đồng ý về cách mã hóa giao tiếp, cụ thể là họ chọn thuật toán mã hóa và khóa bí mật. Sau khi bắt tay, tất cả giao tiếp giữa máy chủ và máy khách sẽ được mã hóa bằng thuật toán và khóa đã thỏa thuận.  
    Giai đoạn bắt tay sử dụng một loại mật mã cụ thể, được gọi là mật mã bất đối xứng, để giao tiếp an toàn ngay cả khi máy khách và máy chủ chưa thống nhất về khóa bí mật. Sau giai đoạn bắt tay, giao tiếp HTTPS được mã hóa bằng mật mã đối xứng, hiệu quả hơn nhiều nhưng yêu cầu cả máy khách và máy chủ đều phải biết về khóa bí mật.  
- Cors  
    Là một cơ chế dựa trên tiêu đề HTTP cho phép máy chủ chỉ ra bất kỳ nguồn gốc nào (miền, lược đồ hoặc cổng) khác với nguồn gốc mà trình duyệt sẽ cho phép tải tài nguyên  
- CSP - Chính sách bảo mật nội dung  
    Là một tiêu chuẩn bảo mật máy tính được giới thiệu để ngăn chặn các cuộc tấn công tập lệnh chéo trang, clickjacking và các cuộc tấn công tiêm mã khác do thực thi nội dung độc hại trong ngữ cảnh trang web đáng tin cậy.  
- OWASP risks  
- SSL/TLS  
    Lớp cổng bảo mật (SSL) và Bảo mật lớp vận chuyển (TLS) là các giao thức mã hóa được sử dụng để cung cấp bảo mật trong liên lạc trên internet.  

