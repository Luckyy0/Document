A. SQL - Structured Query Language - Ngôn ngữ truy vấn có cấu trúc
1. Các khai niệm cơ bản  
    ```
    SQL - Structured Query Language
    ```
    Là một ngôn ngữ tiêu chuẩn để lưu trữ, thao tác và truy xuất dữ liệu trong các hệ quản trị cơ sở dữ liệu quan hệ (RDBMS - Relational Database Management System) như SQL Server, Oracle, MySQL, v.v.  
    ```
    RDBMS - Relational Database Management System - hệ quản trị cơ sở dữ liệu quan hệ
    ```
    Là một chương trình được sử dụng để duy trì cơ sở dữ liệu quan hệ.  
    Là cơ sở cho tất cả các hệ thống cơ sở dữ liệu hiện đại như MySQL, Microsoft SQL Server, Oracle và Microsoft Access.  
    RDBMS sử dụng truy vấn SQL để truy cập dữ liệu trong cơ sở dữ liệu.  
    Dữ liệu trong RDBMS được lưu trữ trong các đối tượng cơ sở dữ liệu được gọi là bảng(tables) . Một Table là một tập hợp các mục nhập dữ liệu (data entries) có liên quan và nó bao gồm các cột(columns) và hàng(rows).  
    ```
    Cơ sở dữ liệu - Database
    ```
    Là một tập hợp các dữ liệu có tổ chức và liên quan đến nhau theo một mô hình dữ liệu nhất định. Một cơ sở dữ liệu có thể chứa nhiều bảng, chỉ mục, khóa, ràng buộc, lược đồ, chế độ xem, thủ tục lưu trữ, hàm, trigger, v.v.  
    ```
    Bảng - Table
    ``` 
    Là một cấu trúc dữ liệu chứa các dòng và cột để lưu trữ các giá trị liên quan đến một đối tượng hoặc một khái niệm.  
    Mỗi cột có một tên và một kiểu dữ liệu xác định.  
    Mỗi dòng có một giá trị duy nhất cho mỗi cột.  
    Một bảng có thể có một hoặc nhiều khóa để xác định duy nhất hoặc liên kết với các bảng khác.
    ```
    Field
    ```
    Là một khái niệm để chỉ một cột trong một bảng cơ sở dữ liệu.  
    Mỗi field có một tên và một kiểu dữ liệu xác định, ví dụ như int, varchar,date, v.v.  Mỗi field có thể chứa một giá trị cho mỗi dòng trong bảng.  
    Một field có thể được đặt làm khóa chính (primary key) hoặc khóa ngoại (foreign key) để xác định duy nhất hoặc liên kết với các bảng khác.  
    ```
    Record
    ```
    Là một khái niệm để chỉ một dòng trong một bảng cơ sở dữ liệu.  
    Mỗi record chứa một giá trị cho mỗi field (cột) trong bảng.  
    Một record có thể được xác định duy nhất bằng một khóa chính (primary key) hoặc liên kết với các record khác bằng một khóa ngoại (foreign key).  
    ```
    Primary key và Foreign key
    ```
    Là hai loại ràng buộc (constraint) có thể được sử dụng để bảo đảm tính toàn vẹn dữ liệu trong các bảng SQL. Đây là những đối tượng quan trọng trong cơ sở dữ liệu.  
    - Primary key:  
    Là một cột hoặc kết hợp của nhiều cột có chứa các giá trị xác định duy nhất mỗi dòng trong bảng.  
    Primary key đảm bảo tính duy nhất của dữ liệu và thường được định nghĩa trên một cột.   
    Khi xác định một primary key cho một bảng, Database Engine sẽ tự động tạo một chỉ mục duy nhất cho các cột primary key. Chỉ mục này cũng cho phép truy cập nhanh đến dữ liệu khi primary key được sử dụng trong các truy vấn.  
    Một bảng chỉ có thể có một primary key và primary key không được chứa giá trị null.  
    - Foreign key:  
    Là một cột hoặc kết hợp của nhiều cột được sử dụng để tạo và thực thi mối liên kết giữa dữ liệu trong hai bảng.  
    Trong một tham chiếu foreign key, một liên kết được tạo giữa hai bảng khi cột hoặc các cột chứa giá trị primary key cho một bảng được tham chiếu bởi cột hoặc các cột trong bảng khác. Cột này trở thành foreign key trong bảng thứ hai. Foreign key đảm bảo tính liên quan của dữ liệu và có thể chứa nhiều giá trị null.  
    ```
    Câu lệnh - Statement
    ```
    Là một đơn vị ngôn ngữ SQL để thực hiện một hành động hoặc yêu cầu trên cơ sở dữ liệu. Có 4 loại câu lệnh chính:  
    -DDL - Data Definition Language - Ngôn ngữ định nghĩa dữ liệu  
    -DML - Data Manipulation Language - Ngôn ngữ thao tác dữ liệu  
    -DCL - Data Control Language - Ngôn ngữ điều khiển dữ liệu  
    -TCL - Transaction Control Language - Ngôn ngữ điều khiển giao dịch  
    ```
    DDL - Data Definition Language
    ```
    Các lệnh dùng để tạo, sửa đổi hoặc xóa các đối tượng trong cơ sở dữ liệu, như bảng, chỉ mục, khóa, ràng buộc, ...   
    Các lệnh DDL bao gồm CREATE, ALTER, DROP, RENAME,...  
    ```
    DML - Data Manipulation Language
    ```
    Các lệnh dùng để lưu trữ, truy xuất, cập nhật hoặc xóa dữ liệu trong các bảng của cơ sở dữ liệu.  
    Các lệnh DML bao gồm SELECT, INSERT, UPDATE, DELETE,...  
    ```
    DCL - Data Control Language
    ```
    Các lệnh dùng để cấp quyền hoặc thu hồi quyền truy cập đến các đối tượng hoặc dữ liệu.   
    Các lệnh DCL bao gồm GRANT, REVOKE,...  
    ```
    TCL - Transaction Control Language
    ```
    Các lệnh dùng để quản lý các giao dịch trong cơ sở dữ liệu, như khởi tạo, xác nhận hoặc hủy bỏ các thay đổi dữ liệu.   
    Các lệnh TCL bao gồm BEGIN TRANSACTION, COMMIT, ROLLBACK,...  
    ```
    Mệnh đề - Clause
    ```
    Là một phần của câu lệnh SQL để chỉ định một điều kiện, một thuộc tính hoặc một tham số cho câu lệnh.   
    Mỗi mệnh đề thường bắt đầu bằng một từ khóa như SELECT, FROM, WHERE, ORDER BY, GROUP BY, HAVING, v.v.  
    ```
    Biểu thức - Expression
    ```
    Là một kết hợp của các toán tử, toán hạng và hằng số để tạo ra một giá trị. Một biểu thức có thể là số học, logic, chuỗihoặc ngày tháng. Ví dụ: 2 + 3 * 5 là một biểu thức số học; Name LIKE ‘A%’ là một biểu thức logic; ‘Hello’ + ’ ’ + ‘World’ là một biểu thức chuỗi; GETDATE() - 1 là một biểu thức ngày tháng.
2. Lợi ích  
    ```
    Giúp lưu trữ và quản lý dữ liệu một cách hiệu quả, an toàn và tiết kiệm không gian.  
    Giúp truy xuất và xử lý dữ liệu một cách nhanh chóng, chính xác và linh hoạt.  
    Giúp duy trì được tính toàn vẹn, đồng bộ và bảo mật của dữ liệu.  
    Giúp chia sẻ và phân phối dữ liệu cho nhiều người dùng hoặc ứng dụng khác nhau.  
    Giúp phân tích và khai thác thông tin từ dữ liệu để hỗ trợ ra quyết định hoặc giải quyết vấn đề.  
    SQL có thể:  
        SQL có thể thực hiện các truy vấn đối với cơ sở dữ liệu  
        SQL có thể truy xuất dữ liệu từ cơ sở dữ liệu  
        SQL có thể chèn bản ghi vào cơ sở dữ liệu  
        SQL có thể cập nhật các bản ghi trong cơ sở dữ liệu  
        SQL có thể xóa bản ghi khỏi cơ sở dữ liệu  
        SQL có thể tạo cơ sở dữ liệu mới  
        SQL có thể tạo các bảng mới trong cơ sở dữ liệu  
        SQL có thể tạo các thủ tục được lưu trữ trong cơ sở dữ liệu  
        SQL có thể tạo dạng xem trong cơ sở dữ liệu  
        SQL có thể đặt quyền trên bảng, thủ tục và dạng xem  
    ```
3. Ứng dụng  
    ```
    Ứng dụng đa dạng và phong phú trong nhiều lĩnh vực khác nhau như:  
    -Kinh doanh: Quản lý khách hàng, đơn hàng, sản phẩm, kho hàng, doanh thu, chi phí,...  
    -Giáo dục: Quản lý sinh viên, giáo viên, điểm số, học phí, thời khóa biểu,...  
    -Y tế: Quản lý bệnh nhân, bác sĩ, thuốc, kết quả xét nghiệm, hồ sơ bệnh án,...
    -Chính phủ: Quản lý công dân, hộ khẩu, giấy tờ tùy thân, thuế thu nhập cá nhân,...
    -Giải trí: Quản lý game online, phim ảnh, âm nhạc, sách báo tạp chí,...  
    ```
4. SQL data types - với mySql  

    ```
    String
    ```
    - CHAR(size)  
    Có thể chứa chữ, số, kí tự đặc biệt; size từ 0 -> 255, mặc định là 1
    - VARCHAR(size)  
    Có thể chứa chữ, số, kí tự đặc biệt; size từ 0 -> 65535  
    - BINARY(size)  
    Tương đương CHAR, nhưng lưu trữ dưới dạng byte, size chỉ định độ dài theo byte, mặc định là 1
    - VARBINARY(size)  
    Tương đương VARCHAR, nhưng lưu trữ dưới dạng byte, size chỉ định độ dài tối đa tính theo byte
    - TINYBLOB  
    Max length 255 bytes  
    - TINYTEXT  
    Giữ một chuỗi có độ dài tối đa 255 ký tự  
    - TEXT(size)  
    Giữ một chuỗi có độ dài tối đa là 65.535 byte  
    BLOB(size)	Giữ tới 65.535 byte dữ liệu
    - MEDIUMTEXT   
    Giữ một chuỗi có độ dài tối đa 16.777.215 ký tự  
    - MEDIUMBLOB
    Giữ tới 16.777.215 byte dữ liệu  
    - LONGTEXT  
    Giữ một chuỗi có độ dài tối đa 4.294.967.295 ký tự  
    - LONGBLOB  
    Giữ tới 4.294.967.295 byte dữ liệu  
    - ENUM(val1, val2, val3, ...)  
    Một đối tượng chuỗi chỉ có thể có một giá trị, được chọn từ danh sách các giá trị có thể.  
    Có thể liệt kê tối đa 65535 giá trị trong danh sách ENUM. Nếu một giá trị được chèn không có trong danh sách, một giá trị trống sẽ được chèn vào. Các giá trị được sắp xếp theo thứ tự nhập  
    - SET(val1, val2, val3, ...)  
    Một đối tượng chuỗi có thể có 0 hoặc nhiều giá trị, được chọn từ danh sách các giá trị có thể.   
    Có thể liệt kê tối đa 64 giá trị trong danh sách SET  
    ```
    NUMERIC
    ```
    - BIT(size)  
    Một loại giá trị bit. Số lượng bit trên mỗi giá trị được chỉ định trong size (1 -> 64), mặc định là 1.  
    - TINYINT(size)  
    Một số nguyên rất nhỏ( -128 -> 127). size từ 0 đến 255. size chỉ định chiều rộng hiển thị tối đa (là 255)  
    - BOOL  
    0 được coi là false, #0 được coi là true.
    - BOOLEAN  
    Tương tự BOOL  
    - SMALLINT(size)  
    Một số nguyên nhỏ(-32768 -> 32767). Phạm vi chưa ký là từ 0 đến 65535. size chỉ định chiều rộng hiển thị tối đa (là 255)  
    - MEDIUMINT(size)  
    Số nguyên trung bình(-8388608 -> 8388607). Phạm vi từ 0 đến 16777215. size chỉ định chiều rộng hiển thị tối đa (là 255)  
    - INT(size)  
    Số nguyên trung bình(-2147483648 -> 2147483647). Phạm vi từ 0 đến 4294967295. size chỉ định chiều rộng hiển thị tối đa (là 255)  
    - INTEGER(size)  
    Tương tự INT  
    - BIGINT(size)  
    Số nguyên lớn(-9223372036854775808 -> 9223372036854775807). Phạm vi 0 -> 18446744073709551615. size tối đa (là 255)  
    - FLOAT(p): Biểu diễn số thập phân.  
    - DECIMAL(size, d)  
    Size là tổng số chữ số. d là số chữ số sau dấu thập phân. max size là 65. max d là 30. default size là 10. default d là 0.   
    ```
    DATE AND TIME
    ```
    - DATE  
    Định dạng: YYYY-MM-DD. Phạm vi được hỗ trợ là từ '1000-01-01' đến '9999-12-31'  
    - DATETIME(fsp)  
    Định dạng: YYYY-MM-DD hh:mm:ss. Phạm vi được hỗ trợ là từ '1000-01-01 00:00:00' đến '9999-12-31 23:59:59'.  
    - TIMESTAMP(fsp)  
    Lưu trữ dưới dạng số giây kể từ '1970-01-01 00:00:00' UTC. Định dạng: YYYY-MM-DD hh:mm:ss.   
    Phạm vi được hỗ trợ là từ '1970-01-01 00:00:01' UTC đến '2038-01-09 03:14:07' UTC. 
    - TIME(fsp)  
    Định dạng: hh:mm:ss. Phạm vi được hỗ trợ là từ '-838:59:59' đến '838:59:59'
    - YEAR  
    Định dạng YYYY  
5. SQL contrains - Ràng buộc SQL và KEY WORD  
    
    Được sử dụng để chỉ định các quy tắc cho dữ liệu trong một bảng.   
    Các ràng buộc được sử dụng để giới hạn loại dữ liệu có thể đi vào một bảng. Điều này đảm bảo tính chính xác và độ tin cậy của dữ liệu trong bảng.   
    Nếu có bất kỳ vi phạm nào giữa ràng buộc và hành động dữ liệu, hành động đó sẽ bị hủy bỏ.  
    Các ràng buộc có thể là cấp độ cột hoặc cấp độ bảng.  
    Các ràng buộc sau thường được sử dụng trong SQL:  
    -NOT NULL : Đảm bảo rằng một cột không thể có giá trị NULL  
    -UNIQUE : Đảm bảo rằng tất cả các giá trị trong một cột là khác nhau  
    -PRIMARY KEY : Một sự kết hợp của một NOT NULLvà UNIQUE. Xác định duy nhất mỗi hàng trong một bảng  
    -FOREIGN KEY : Ngăn chặn các hành động phá hủy liên kết giữa các bảng  
    -CHECK : Đảm bảo rằng các giá trị trong một cột thỏa mãn một điều kiện cụ thể  
    -DEFAULT : Đặt giá trị mặc định cho một cột nếu không có giá trị nào được chỉ định  
    -CREATE INDEX : Dùng để tạo và lấy dữ liệu từ cơ sở dữ liệu rất nhanh  
    
    ```
    NOT NULL
    ```
    NOT NULL buộc column không chấp nhận giá trị NULL.  
    Buộc một field phải luôn chứa một giá trị, nghĩa là bạn không thể chèn bản ghi mới hoặc cập nhật bản ghi mà không thêm giá trị vào trường này.  
    Vd:  
    -Tạo bảng:  
    CREATE TABLE Persons (  
        ID int NOT NULL,  
        LastName varchar(255) NOT NULL,  
        FirstName varchar(255) NOT NULL,  
        Age int  
    );   
    -Chỉnh sửa bảng  
    ALTER TABLE Persons  
    MODIFY COLUMN Age int NOT NULL;  
    ```
    UNIQUE
    ```
    UNIQUE đảm bảo rằng tất cả các giá trị trong một column là khác nhau.  
    Có thể có nhiều UNIQUE ràng buộc trên mỗi bảng  
    Vd:  
    -UNIQUE trên 1 field:  
    CREATE TABLE Persons (  
        ID int NOT NULL,  
        LastName varchar(255) NOT NULL,  
        FirstName varchar(255),  
        Age int,  
        UNIQUE (ID)  
    );  
    -UNIQUE được đặt tên (UC_Person) trên nhiều field:  
    CREATE TABLE Persons (  
        ID int NOT NULL,  
        LastName varchar(255) NOT NULL,  
        FirstName varchar(255),  
        Age int,  
        CONSTRAINT UC_Person UNIQUE (ID,LastName)  
    );  
        UNIQUE trên alter table
            ALTER TABLE Persons
            ADD UNIQUE (ID);

            ALTER TABLE Persons
            ADD CONSTRAINT UC_Person UNIQUE (ID,LastName);
        DROP UNIQUE
            ALTER TABLE Persons
            DROP INDEX UC_Person;
+ PRIMARY KEY 
    Xác định duy nhất từng bản ghi trong một bảng
    Tương đương với NOT NULL và UNIQUE
    chỉ có thể có MỘT PRIMARY KEY
    PRIMARY KEY có thể bao gồm nhiều field
    Vd:
        Trên 1 field:
            CREATE TABLE Persons (
                ID int NOT NULL,
                LastName varchar(255) NOT NULL,
                FirstName varchar(255),
                Age int,
                PRIMARY KEY (ID)
            );
        Trên nhiều field và được đặt tên:
            CREATE TABLE Persons (
                ID int NOT NULL,
                LastName varchar(255) NOT NULL,
                FirstName varchar(255),
                Age int,
                CONSTRAINT PK_Person PRIMARY KEY (ID,LastName)
            );
        ADD PRIMARY KEY: 
            ALTER TABLE Persons
            ADD PRIMARY KEY (ID);

            ALTER TABLE Persons
            ADD CONSTRAINT PK_Person PRIMARY KEY (ID,LastName);
        DROP PRIMARY KEY:
            ALTER TABLE Persons
            DROP PRIMARY KEY;

            ALTER TABLE Persons
            DROP CONSTRAINT PK_Person;
+ FOREIGN KEY
    Được sử dụng để ngăn chặn các hành động phá hủy liên kết giữa các bảng.
    FOREIGN KEY có thể là một trường (hoặc tập hợp các trường) trong một bảng, tham chiếu đến một PRIMARY KEY trên bảng khác.
    Bảng có FOREIGN KEY được gọi là bảng con và bảng có PRIMARY KEY được gọi là bảng được tham chiếu hoặc bảng cha.
    Vd: 
        Trên 1 field:
            CREATE TABLE Orders (
                OrderID int NOT NULL,
                OrderNumber int NOT NULL,
                PersonID int,
                PRIMARY KEY (OrderID),
                FOREIGN KEY (PersonID) REFERENCES Persons(PersonID)
            );
        Trên nhiều filed - FOREIGN KEY được đặt tên
            CREATE TABLE Orders (
                OrderID int NOT NULL,
                OrderNumber int NOT NULL,
                PersonID int,
                PRIMARY KEY (OrderID),
                CONSTRAINT FK_PersonOrder FOREIGN KEY (PersonID)
                REFERENCES Persons(PersonID)
            );
        ADD FOREIGN KEY:
            ALTER TABLE Orders
            ADD FOREIGN KEY (PersonID) REFERENCES Persons(PersonID);

            ALTER TABLE Orders
            ADD CONSTRAINT FK_PersonOrder
            FOREIGN KEY (PersonID) REFERENCES Persons(PersonID);
        DROP FOREIGN KEY:
            ALTER TABLE Orders
            DROP FOREIGN KEY FK_PersonOrder; 

            ALTER TABLE Orders
            DROP CONSTRAINT FK_PersonOrder;   
+ CHECK
    Được sử dụng để giới hạn phạm vi giá trị có thể được đặt trong một cột.
    Nếu xác định CHECK trên một cột, nó sẽ chỉ cho phép một số giá trị nhất định cho cột này.
    Nếu xác định CHECK trên một bảng, nó có thể giới hạn các giá trị trong các cột nhất định dựa trên các giá trị trong các cột khác trong hàng.
    Vd: 
        Trên field:
            CREATE TABLE Persons (
                ID int NOT NULL,
                LastName varchar(255) NOT NULL,
                FirstName varchar(255),
                Age int,
                CHECK (Age>=18)
            );
        CHECK trên nhiều field - được đặt tên
            CREATE TABLE Persons (
                ID int NOT NULL,
                LastName varchar(255) NOT NULL,
                FirstName varchar(255),
                Age int,
                City varchar(255),
                CONSTRAINT CHK_Person CHECK (Age>=18 AND City='Sandnes')
            );
        ADD CHECK:
            ALTER TABLE Persons
            ADD CHECK (Age>=18);

            ALTER TABLE Persons
            ADD CONSTRAINT CHK_PersonAge CHECK (Age>=18 AND City='Sandnes');
        DROP CHECK
            ALTER TABLE Persons
            DROP CHECK CHK_PersonAge;
+ DEFAULT
    Được sử dụng để đặt giá trị mặc định cho một cột.
    Giá trị DEFAULT sẽ được thêm vào tất cả các bản ghi mới, nếu không có giá trị nào khác được chỉ định.
    VD:
        basic: 
            CREATE TABLE Persons (
                ID int NOT NULL,
                LastName varchar(255) NOT NULL,
                FirstName varchar(255),
                Age int,
                City varchar(255) DEFAULT 'Sandnes'
            );
        DEFAULT with fuction:
            CREATE TABLE Orders (
                ID int NOT NULL,
                OrderNumber int NOT NULL,
                OrderDate date DEFAULT GETDATE()
            );
        DEFAULT trên ALTER TABLE:
            ALTER TABLE Persons
            ALTER City SET DEFAULT 'Sandnes';       
        DROP DEFAULT:
            ALTER TABLE Persons
            ALTER City DROP DEFAULT;
.........................................................
+ AUTO INCREMENT 
    Cho phép một số duy nhất được tạo tự động khi một bản ghi mới được chèn vào bảng.
    Theo mặc định, giá trị bắt đầu cho AUTO_INCREMENT là 1 và giá trị này sẽ tăng thêm 1 cho mỗi bản ghi mới.
    VD:
        basic:
            CREATE TABLE Persons (
                Personid int NOT NULL AUTO_INCREMENT,
                LastName varchar(255) NOT NULL,
                FirstName varchar(255),
                Age int,
                PRIMARY KEY (Personid)
            );
        Với 1 giá trị khởi tạo bất kì:
            ALTER TABLE Persons AUTO_INCREMENT=100;
        Với giá trị khởi tạo và bước nhảy:
            AUTOINCREMENT(10,5)
+ ORDER BY:
    Sắp xếp tập kết quả theo thứ tự tăng dần hoặc giảm dần
    Sắp xếp ưu tiên theo thứ tự cột nếu có nhiều cột
    VD:
        SELECT * FROM Customers
        ORDER BY Country ASC, CustomerName DESC;
+ JOIN 
    Được sử dụng để kết hợp các hàng từ hai hoặc nhiều bảng, dựa trên cột có liên quan giữa chúng.
    Kết hợp theo cột
+ INNER JOIN
    Lấy các bản ghi có giá trị phù hợp trong cả hai bảng(phần giao giữa 2 bảng)
    Cú pháp:
        SELECT column_name(s)
        FROM table1
        INNER JOIN table2
        ON table1.column_name = table2.column_name;
    VD:
        SELECT Orders.OrderID, Customers.CustomerName, Shippers.ShipperName
        FROM ((Orders INNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID)
        INNER JOIN Shippers ON Orders.ShipperID = Shippers.ShipperID);
+ LEFT JOIN 
    Trả về tất cả các bản ghi từ bảng bên trái (bảng 1) và các bản ghi phù hợp (nếu có) từ bảng bên phải (bảng 2).
        (Tất cả các record ở bảng 1 + các cột ở bẳng 2, nếu các cột bảng 2 không có giá trị khớp thì trả về NULL)
    Cú pháp:
        SELECT column_name(s)
        FROM table1
        LEFT JOIN table2
        ON table1.column_name = table2.column_name;
    VD:
        SELECT Customers.CustomerName, Orders.OrderID
        FROM Customers
        LEFT JOIN Orders ON Customers.CustomerID = Orders.CustomerID
        ORDER BY Customers.CustomerName;
+ RIGHT JOIN 
    Trả về tất cả các bản ghi từ bảng bên phải (bảng 2) và các bản ghi phù hợp (nếu có) từ bảng bên trái (bảng 1).
        (Tất cả các record ở bảng 2 + các cột ở bẳng 1, nếu các cột bảng 1 không có giá trị khớp thì trả về NULL)
    Cú pháp:
        SELECT column_name(s)
        FROM table1
        RIGHT JOIN table2
        ON table1.column_name = table2.column_name; 
    VD:
        SELECT Orders.OrderID, Employees.LastName, Employees.FirstName
        FROM Orders
        RIGHT JOIN Employees ON Orders.EmployeeID = Employees.EmployeeID
        ORDER BY Orders.OrderID;
+ CROSS JOIN
    Trả về tất cả các bản ghi từ cả hai bảng (bảng1 và bảng2).
    Cú pháp:
        SELECT column_name(s)
        FROM table1
        CROSS JOIN table2;
    VD:
        SELECT Customers.CustomerName, Orders.OrderID
        FROM Customers
        CROSS JOIN Orders;
+ SELF JOIN 
    Sử dụng để nối 1 bảng với chính nó
    Cú pháp:
        SELECT column_name(s)
        FROM table1 T1, table1 T2
        WHERE condition;
    VD:
        SELECT A.CustomerName AS CustomerName1, B.CustomerName AS CustomerName2, A.City
        FROM Customers A, Customers B
        WHERE A.CustomerID <> B.CustomerID
        AND A.City = B.City
        ORDER BY A.City;
6.  Các câu lệnh trong SQL 
+ Create database
    Lệnh được sử dụng để tạo cơ sở dữ liệu SQL mới.
        CREATE DATABASE databasename;
+ drop database
    Lệnh được sử dụng để xóa cơ sở dữ liệu SQL hiện có
        DROP DATABASE databasename;
+ backup database
    Lệnh được sử dụng trong SQL Server để tạo bản sao lưu đầy đủ của cơ sở dữ liệu SQL hiện có.
        BACKUP DATABASE databasename
        TO DISK = 'filepath';
    Lệnh sao lưu các phần thay đổi từ lần sao lưu trước đó
        BACKUP DATABASE databasename
        TO DISK = 'filepath'
        WITH DIFFERENTIAL;
+ create table
    Lệnh được sử dụng để tạo một bảng mới trong cơ sở dữ liệu.
        CREATE TABLE table_name (
            column1 datatype,
            column2 datatype,
            column3 datatype,
        ....
        );
    Tạo bảng từ bảng khách
        CREATE TABLE new_table_name AS
            SELECT column1, column2,...
            FROM existing_table_name
            WHERE ....;
+ drop table
    Lệnh được sử dụng để loại bỏ một bảng hiện có trong cơ sở dữ liệu
        DROP TABLE table_name;
+ truncate table
    Lệnh được sử dụng để xóa dữ liệu bên trong một bảng, nhưng không xóa chính bảng đó
        TRUNCATE TABLE table_name;
+ alter table
    Lệnh được sử dụng để thêm, xóa hoặc sửa đổi các cột trong một bảng hiện có.
        Thêm column:
            ALTER TABLE table_name
            ADD column_name datatype;
        Xóa column:
            ALTER TABLE table_name
            DROP COLUMN column_name;
        Đổi tên column:
            ALTER TABLE table_name
            RENAME COLUMN old_name to new_name;
        Sửa đổi kiểu dữ liệu column
            ALTER TABLE table_name
            MODIFY COLUMN column_name datatype;
    Lệnh cũng được sử dụng để thêm và loại bỏ các ràng buộc khác nhau trên một bảng hiện có.
+ create index 
    Lệnh được sử dụng để tạo chỉ mục trong bảng.
    Các index được sử dụng để truy xuất dữ liệu từ cơ sở dữ liệu nhanh hơn so với cách khác. Index bị ẩn đi khỏi user, 
        chúng chỉ được sử dụng để tăng tốc độ tìm kiếm/truy vấn.
    Lưu ý: Cập nhật bảng có chỉ mục mất nhiều thời gian hơn cập nhật bảng không có chỉ mục (vì chỉ mục cũng cần cập nhật). 
        =>  chỉ tạo các chỉ mục trên các cột sẽ được tìm kiếm thường xuyên.
    Cú pháp:
        create:
            CREATE INDEX index_name
            ON table_name (column1, column2, ...);
        create với unique:
            CREATE UNIQUE INDEX index_name
            ON table_name (column1, column2, ...);
        drop:
            ALTER TABLE table_name
            DROP INDEX index_name;
    Vd:
        Index trên 1 field:
            CREATE INDEX idx_lastname
            ON Persons (LastName);
        Index cho nhiều field:
            CREATE INDEX idx_pname
            ON Persons (LastName, FirstName);
+ create view
    Tạo một bảng ảo dựa trên tập kết quả của một câu lệnh SQL.
    Cú pháp:
        CREATE VIEW view_name AS
        SELECT column1, column2, ...
        FROM table_name
        WHERE condition;
    VD:
            CREATE VIEW [Brazil Customers] AS
            SELECT CustomerName, ContactName
            FROM Customers
            WHERE Country = 'Brazil';
        Create or replace:
            CREATE OR REPLACE VIEW [Brazil Customers] AS
            SELECT CustomerName, ContactName, City
            FROM Customers
            WHERE Country = 'Brazil';
        drop:
            DROP VIEW [Brazil Customers];
+ select
    Lấy dữ liệu từ cơ sở dữ liệu
    SELECT column1, column2, ... FROM table_name;
    SELECT * FROM table_name;
+ select distinct
    tương tự select, nhưng chỉ trả về các giá trị riêng biệt
    VD:
        SELECT DISTINCT Country FROM Customers;
        SELECT COUNT(DISTINCT Country) FROM Customers;
+ select top 
    Chỉ định số lượng record sẽ trả về.
    Cú pháp:
        SELECT column_name(s)
        FROM table_name
        WHERE condition
        LIMIT number;
+ where 
    Sử dụng để lọc các bản ghi.
        SELECT column1, column2, ...
        FROM table_name
        WHERE condition;   
    VD:
        SELECT * FROM Customers
        WHERE CustomerID=1;
    Toán tử trong where clause:
        = ; > ; < ; >= ; <= ; <> ; LIKE ; IN ; BETWEEN .
+ insert into
    Sử dụng để chèn các bản ghi mới vào một bảng.
    Cú pháp:
        INSERT INTO table_name (column1, column2, column3, ...)
        VALUES (value1, value2, value3, ...);

        INSERT INTO table_name
        VALUES (value1, value2, value3, ...);   
+ update
    Sử dụng để sửa đổi các record hiện có trong một bảng. 
    Cú pháp:  
        UPDATE table_name
        SET column1 = value1, column2 = value2, ...
        WHERE condition; 
+ delete 
    Sử dụng để xóa các record hiện có trong một bảng.
    Cú pháp:
        DELETE FROM table_name WHERE condition;    
+ Group by
    Nhóm các record theo giá trị của field nào đó
    Thường được sử dụng với các hàm tổng hợp: COUNT(), MAX(), MIN(), SUM(), AVG() để nhóm tập hợp kết quả theo một hoặc nhiều cột.
    Cú pháp:
        SELECT column_name(s)
        FROM table_name
        WHERE condition
        GROUP BY column_name(s)
        ORDER BY column_name(s)
    VD:
        SELECT COUNT(CustomerID), Country
        FROM Customers
        GROUP BY Country
        ORDER BY COUNT(CustomerID) DESC;
+ HAVING 
    Được thêm vào SQL thay thế cho WHERE trong các hàm tổng hợp ( WHERE không thể dùng với các hàm tổng hợp) .
    Cú pháp:
        SELECT column_name(s)
        FROM table_name
        WHERE condition
        GROUP BY column_name(s)
        HAVING condition
        ORDER BY column_name(s)
    VD: 
        SELECT COUNT(CustomerID), Country
        FROM Customers
        GROUP BY Country
        HAVING COUNT(CustomerID) > 5
        ORDER BY COUNT(CustomerID) DESC;
+ INSERT INTO SELECT
    Dùng để sao chép dữ liệu từ một bảng và chèn nó vào một bảng khác
    Lưu ý: các kiểu dữ liệu trong bảng nguồn và bảng đích phải khớp nhau.
    Cú pháp:
        INSERT INTO table2
        SELECT * FROM table1
        WHERE condition;

        INSERT INTO table2 (column1, column2, column3, ...)
        SELECT column1, column2, column3, ...
        FROM table1
        WHERE condition;
    VD:
        Sao chép 1 số cột từ supplier vào Customer:
            INSERT INTO Customers (CustomerName, City, Country)
            SELECT SupplierName, City, Country FROM Suppliers;
+ CASE 
    Đi qua các điều kiện và trả về một giá trị khi điều kiện đầu tiên được đáp ứng (giống như câu lệnh if-then-else). 
    Vì vậy, khi một điều kiện là đúng, nó sẽ ngừng đọc và trả về kết quả. Nếu không có điều kiện nào là đúng, nó sẽ trả về giá trị trong ELSE mệnh đề.
    Nếu không có ELSE và không có điều kiện nào đúng, nó sẽ trả về NULL.
    Cú pháp:
        CASE
            WHEN condition1 THEN result1
            WHEN condition2 THEN result2
            WHEN conditionN THEN resultN
            ELSE result
        END;
    VD:
        SELECT OrderID, Quantity,
        CASE
            WHEN Quantity > 30 THEN 'The quantity is greater than 30'
            WHEN Quantity = 30 THEN 'The quantity is 30'
            ELSE 'The quantity is under 30'
        END AS QuantityText
        FROM OrderDetails;
---------------------------------------------------------------------------------------------
7. Function
+ MIN 
    MIN() trả về giá trị nhỏ nhất của cột đã chọn.
    Cú pháp:
        SELECT MIN(column_name)
        FROM table_name
        WHERE condition;
    VD:
        SELECT MIN(Price) AS SmallestPrice
        FROM Products;
+ MAX 
    MAX() trả về giá trị lớn nhất của cột đã chọn.
    Cú pháp:
        SELECT MAX(column_name)
        FROM table_name 
        WHERE condition;
    VD:
        SELECT MAX(Price) AS largestPrice
        FROM Products;
+ COUNT
    COUNT() trả về số hàng khớp với một tiêu chí đã chỉ định.
    Cú pháp:
        SELECT COUNT(column_name)
        FROM table_name
        WHERE condition;
+ AVG
    AVG() trả về giá trị trung bình của một cột số.
    Cú pháp:
        SELECT AVG(column_name)
        FROM table_name
        WHERE condition;
+ SUM
    SUM() trả về tổng của một cột số.
    Cú pháp:
        SELECT SUM(column_name)
        FROM table_name
        WHERE condition;
+ IF NULL
    Trả về một giá trị thay thế nếu một biểu thức là NULL.
    VD:
        SELECT ProductName, UnitPrice * (UnitsInStock + IFNULL(UnitsOnOrder, 0)) FROM Products;
+ COALESCE
    Tương tự IF NULL
    VD:
        SELECT ProductName, UnitPrice * (UnitsInStock + COALESCE(UnitsOnOrder, 0)) FROM Products;
------------------------------------------------------------------------------------
8. Operator - toán tử
+ AND 
    Hiển thị bản ghi nếu tất cả các điều kiện được phân tách bằng AND là TRUE.
    Cú pháp:
        SELECT column1, column2, ...
        FROM table_name
        WHERE condition1 AND condition2 AND condition3 ...;
+ OR 
    Hiển thị bản ghi nếu bất kỳ điều kiện nào được phân tách bằng OR là TRUE.
    Cú pháp:    
        SELECT column1, column2, ...
        FROM table_name
        WHERE condition1 OR condition2 OR condition3 ...;
+NOT 
    Hiển thị một bản ghi nếu (các) điều kiện KHÔNG ĐÚNG.
    Cú pháp:
        SELECT column1, column2, ...
        FROM table_name
        WHERE NOT condition;
+ LIKE
    Được sử dụng trong mệnh đề WHERE để tìm kiếm một mẫu được chỉ định trong một cột.
    Các kí tự Wildcard được sử dụng trong LIKE - mySql:
        Dấu phần trăm (%) đại diện cho không, một hoặc nhiều ký tự
        Dấu gạch dưới (_) đại diện cho một ký tự đơn
    Cú pháp:
        SELECT column1, column2, ...
        FROM table_name
        WHERE columnN LIKE pattern; 
+ IN 
    Cho phép chỉ định nhiều giá trị trong mệnh đề WHERE.
    Là cách viết tắt của nhiều điều kiện OR.
    Cú pháp:
        SELECT column_name(s)
        FROM table_name
        WHERE column_name IN (value1, value2, ...);

        SELECT column_name(s)
        FROM table_name
        WHERE column_name IN (SELECT STATEMENT);
+ BETWEEN
    Chọn các giá trị trong một phạm vi nhất định. 
    Các giá trị có thể là số, văn bản hoặc ngày tháng.
    Cú pháp:
        SELECT column_name(s)
        FROM table_name
        WHERE column_name BETWEEN value1 AND value2;
    VD:
        SELECT * FROM Orders
        WHERE OrderDate BETWEEN '1996-07-01' AND '1996-07-31';
+ UNION
    Sử dụng để kết hợp tập hợp kết quả của hai hoặc nhiều câu lệnh SELECT.
    Mọi câu lệnh SELECT trong UNION phải có cùng số cột
    Các cột cũng phải có kiểu dữ liệu tương tự
    Các cột trong mọi câu lệnh SELECT cũng phải theo cùng một thứ tự
    Theo mặc định UNION chỉ cho phép giá trị riêng biệt, để cho phép các giá trị trùng lặp => UNION ALL
    Kết hợp theo hàng
    Cú pháp:
        SELECT column_name(s) FROM table1
        UNION
        SELECT column_name(s) FROM table2;
    VD:
        SELECT City FROM Customers
        UNION
        SELECT City FROM Suppliers
        ORDER BY City;  
+ EXISTS
    Sử dụng để kiểm tra sự tồn tại của bất kỳ bản ghi nào trong truy vấn nội bộ.
    Trả về TRUE nếu truy vấn nội bộ trả về một hoặc nhiều bản ghi.
    Cú pháp:
        SELECT column_name(s)
        FROM table_name
        WHERE EXISTS
        (SELECT column_name FROM table_name WHERE condition);
+ ANY
    cho phép thực hiện so sánh giữa một giá trị đơn và một dải giá trị khác.
    Kết quả là trả về một giá trị boolean
    Trả về TRUE nếu BẤT KỲ giá trị truy vấn con nào đáp ứng điều kiện
    Cú pháp:
        SELECT column_name(s)
        FROM table_name
        WHERE column_name operator ANY
        (SELECT column_name
        FROM table_name
        WHERE condition); 
    VD:
        Trả về ProductName từ bảng Products với điều kiện ProductID nằm trong tập hợp các đơn hàng có số lượng 10:
            SELECT ProductName
            FROM Products
            WHERE ProductID = ANY
            (SELECT ProductID
            FROM OrderDetails
            WHERE Quantity = 10);
+ SOME
    Tương tự ANY
+ ALL
    Kết quả là trả về một giá trị boolean
    Trả về TRUE nếu TẤT CẢ các giá trị truy vấn phụ đáp ứng điều kiện
    Được sử dụng với câu lệnh SELECT, WHERE và HAVING
    Cú pháp:    
        SELECT ALL column_name(s)
        FROM table_name
        WHERE condition;    

        SELECT column_name(s)
        FROM table_name
        WHERE column_name operator ALL
        (SELECT column_name
        FROM table_name
        WHERE condition);
    VD:
        Trả về ProductName từ bảng Products với điều kiện tất cả các đơn đặt hàng có số lượng 10:
        SELECT ProductName
        FROM Products
        WHERE ProductID = ALL
        (SELECT ProductID
        FROM OrderDetails
        WHERE Quantity = 10);
9. TRANSACTION
    TRANSACTION là một chuỗi gồm một hoặc nhiều câu lệnh SQL được thực thi như một đơn vị công việc. TRANSACTION giúp đảm 
        bảo rằng cơ sở dữ liệu vẫn ở trạng thái nhất quán ngay cả khi có nhiều người dùng hoặc hoạt động xảy ra đồng thời.
    Có thể Commit và Roll back
    Giao dịch được thực hiện khi tất cả các thay đổi đều được thực hiện
    Giao dịch được khôi phục =>  tất cả các thay đổi sẽ được hoàn tác.
10. khác 
+ Aliases
    Sử dụng để đặt tên tạm thời cho một bảng hoặc một cột trong bảng.
    Thường được sử dụng để làm cho tên cột dễ đọc hơn
    Chỉ tồn tại trong khoảng thời gian của truy vấn đó.
    Cú pháp:
        SELECT column_name AS alias_name
        FROM table_name;

        SELECT column_name(s)
        FROM table_name AS alias_name;
    VD:
        SELECT o.OrderID, o.OrderDate, c.CustomerName
        FROM Customers AS c, Orders AS o
        WHERE c.CustomerName='Around the Horn' AND c.CustomerID=o.CustomerID;

    
    