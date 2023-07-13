```
ORMs - Object-Relational Mapping - ÁNh 
```
Một kỹ thuật cho phép truy vấn và thao tác dữ liệu từ cơ sở dữ liệu bằng mô hình hướng đối tượng.  
Điều này tạo ra một cơ sở dữ liệu đối tượng ảo có thể được sử dụng từ bên trong ngôn ngữ lập trình => không cần sử dụng SQL, thay vào đó tương tác trực tiếp với một đối tượng bằng ngôn ngữ đang sử dụng.  

Lợi ích  
- So với các kỹ thuật trao đổi truyền thống giữa ngôn ngữ hướng đối tượng và cơ sở dữ liệu quan hệ, ORM thường giảm số lượng mã cần viết.  
- Việc cập nhật, bảo trì và sử dụng lại mã sẽ dễ dàng hơn.
- Phù hợp với cách mã hóa tự nhiên  
- Trừu tượng hóa hệ thống DB, vì vậy có thể thay đổi nó bất cứ khi nào.  
- Cho phép sử dụng lợi thế của OOP như kế thừa dữ liệu mà không phải đau đầu.  

Bất lợi  
- Hiệu suất vẫn ổn đối với các truy vấn thông thường, nhưng một chuyên gia SQL sẽ luôn làm tốt hơn với SQL của riêng mình cho các dự án lớn.  

```
ACID
```  
Viết tăt của: atomicity - tính nguyên tử, consistency - tính nhất quán, isolation - sự cô lập và durability - độ bền.  
Giúp đảm bảo thực hiện giao dịch một cách đáng tin cậy  
Về atomicity - tính nguyên tử: Giao dịch phải kết thúc khi tất cả các bước trong giao dịch đều được thực hiện thành công hoặc hoàn nguyên về trạng thái cũ khi có 1 bước nào đó không thực hiện được  
Về consistency - tính nhất quán: Đạt được trạng thái dữ liệu chính xác, đảm bảo mọi ràng buộc dữ liệu đều được đáp ứng  
Về isolation - sự cô lập: nhiều giao dịch có thể xảy ra đồng thời mà không đọc sai dữ liệu. Nếu cùng một lúc, có nhiều tiến trình cùng diễn ra thì cần một cơ chế đưa ra để bảo đảm rằng các tiến trình này có thể hoạt động song song mà không ảnh hưởng đến nhau.  
Về durability - độ bền: để đảm bảo rằng khi các Transaction diễn ra thành công thì tác dụng nó tạo ra với cơ sở dữ liệu phải bền vững. Dù hệ thống có xảy ra bất kỳ lỗi gì thì dữ liệu luôn được khôi phục lại nguyên trạng. Tức là hoạt động diễn ra được ghi chép lại, nếu có bất kì sự cố nào diễn ra thì có thể backup  
ACID là một tập hợp các thuộc tính, nhưng nó không phải là một quy trình  
Để áp dụng ACID, sử dụng một hệ thống có tên là khóa để giữ cơ sở dữ liệu ở trạng thái chờ trong khi các giao dịch diễn ra.  
Khóa hoạt động: khi một giao dịch bắt đầu, công cụ cơ sở dữ liệu sẽ khóa dữ liệu mà nó đang làm việc cho đến khi giao dịch hoàn tất (và đôi khi, hơn thế nữa). Theo cách đó, các giao dịch đồng thời không thể hoạt động với dữ liệu đang bị thay đổi bởi giao dịch đầu tiên.

```
Transactions
```
Là một chuỗi gồm nhiều thao tác được thực hiện trên cơ sở dữ liệu và tất cả đều được phục vụ như một đơn vị công việc logic duy nhất — diễn ra toàn bộ hoặc không diễn ra. Nói cách khác, không bao giờ có trường hợp chỉ thực hiện một nửa thao tác và lưu kết quả.  

```
Failure Modes
```
Read contention - Tranh chấp quyền đọc: Điều này xảy ra khi nhiều máy khách hoặc quy trình đang cố đọc dữ liệu từ cùng một vị trí trong cơ sở dữ liệu cùng một lúc, điều này có thể dẫn đến sự chậm trễ hoặc lỗi.  
Write contention -Tranh chấp ghi: Điều này xảy ra khi nhiều máy khách hoặc quy trình đang cố gắng ghi dữ liệu vào cùng một vị trí trong cơ sở dữ liệu cùng một lúc, điều này có thể dẫn đến sự chậm trễ hoặc lỗi.  
Thundering herd: Điều này xảy ra khi một số lượng lớn máy khách hoặc quy trình cố gắng truy cập đồng thời vào cùng một tài nguyên, điều này có thể dẫn đến cạn kiệt tài nguyên và giảm hiệu suất.
Cascade: Điều này xảy ra khi lỗi trong một phần của hệ thống cơ sở dữ liệu gây ra phản ứng dây chuyền dẫn đến lỗi trong các phần khác của hệ thống.
Deadlock - Bế tắc: Điều này xảy ra khi hai hoặc nhiều giao dịch đang chờ nhau giải phóng khóa trên tài nguyên, dẫn đến bế tắc.
Corruption - Hỏng: Điều này xảy ra khi dữ liệu trong cơ sở dữ liệu bị hỏng, có thể dẫn đến lỗi hoặc kết quả không mong muốn khi đọc hoặc ghi vào cơ sở dữ liệu.
Lỗi phần cứng: Điều này xảy ra khi các thành phần phần cứng, chẳng hạn như ổ đĩa hoặc bộ nhớ, bị lỗi, có thể dẫn đến mất hoặc hỏng dữ liệu.
Lỗi phần mềm: Điều này xảy ra khi các thành phần phần mềm, chẳng hạn như hệ thống quản lý cơ sở dữ liệu hoặc ứng dụng, bị lỗi, có thể dẫn đến lỗi hoặc kết quả không mong muốn.
Lỗi mạng: Điều này xảy ra khi kết nối mạng giữa cơ sở dữ liệu và máy khách bị mất, điều này có thể dẫn đến lỗi hoặc hết thời gian chờ khi cố gắng truy cập cơ sở dữ liệu.
Tấn công từ chối dịch vụ (DoS): Điều này xảy ra khi một tác nhân độc hại cố gắng áp đảo cơ sở dữ liệu bằng các yêu cầu, dẫn đến cạn kiệt tài nguyên và giảm hiệu suất.  
