function getRandom (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
};

const VND = new Intl.NumberFormat('vi-VN', {
  style: 'currency',
  currency: 'VND',
});


var arrayProduct = [
    {
        name: 'Điện thoại Apple iPhone 14 Pro Max 128GB',
        img: 'https://down-vn.img.susercontent.com/file/93b3f6d4799b06f9279f817540daa4d1_tn',
        imgSmall1: 'https://down-vn.img.susercontent.com/file/93b3f6d4799b06f9279f817540daa4d1',
        imgSmall2: 'https://down-vn.img.susercontent.com/file/3af324bc17f502e8b1898fd5a2b01844',
        imgSmall3: 'https://down-vn.img.susercontent.com/file/198720e37eeccfcdc98c6ea87f5decaa_tn',
        priceCurrentNumber: 27090000,
        priceCurrent:  VND.format(27090000),
        priceOld: VND.format(33990000),
        city: 'Việt Nam',
        sold: getRandom(1, 10),
        saleOff: getRandom(10, 30),
        descTop: 'Ở dòng iPhone 14 Pro Max 128GB, Apple đã thay thế thiết kế tai thỏ truyền thống trước đó bằng thiết kế hình viên thuốc mới mẻ. Ưu điểm của thiết kế hình viên thuốc chính là không chiếm quá nhiều diện tích màn hình nhằm tối ưu hóa không gian hiển thị nội dung của smartphone. Ngoài ra, siêu phẩm mới của nhà Táo cũng sở hữu kích thước màn hình đạt 6.7 inch với độ phân giải 2796 x 1290 pixel, tấm nền OLED cùng công nghệ Retina độc quyền. Nhờ vào đó, người dùng sẽ có được những trải nghiệm giải trí và làm việc hoàn hảo với hình ảnh sắc nét và rực rỡ.',
        imgDesc: 'https://down-vn.img.susercontent.com/file/3af324bc17f502e8b1898fd5a2b01844',
        descBottom: 'Nhằm giúp người dùng có thể sử dụng iPhone ngay dưới ánh nắng trực tiếp, Apple đã nâng cấp độ sáng tối đa đến 2000 nits ở siêu phẩm mới nhất. Hơn nữa, màn hình của máy cũng có khả năng tự động điều chỉnh ánh sáng phù hợp với môi trường giúp bảo vệ thị lực, cũng như tiết kiệm pin. Cũng giống với người tiền nhiệm, thế hệ iPhone 14 Pro Max cũng được trang bị tần số quét đạt 120Hz nhằm tạo nên trải nghiệm chạm vuốt mượt mà cho người dùng. Đặc biệt hơn, tần số quét trên máy có thể tự động thay đổi dao động từ 1Hz đến 120Hz giúp hạn chế tiêu thụ dung lượng pin trên máy.'
    },
    {
        name: 'Điện thoại Apple iPhone 13 128GB',
        img: 'https://down-vn.img.susercontent.com/file/242a10dd98cc056cbd73d12fdf280b9b_tn',
        imgSmall1: 'https://down-vn.img.susercontent.com/file/242a10dd98cc056cbd73d12fdf280b9b_tn',
        imgSmall2: 'https://down-vn.img.susercontent.com/file/6367156026c428fe40d3a0500b93bf1d_tn',
        imgSmall3: 'https://down-vn.img.susercontent.com/file/117d81f7b67e8823ab5ddc45317ef3cc_tn',
        priceOld: VND.format(24990000),
        priceCurrentNumber: 16640000,
        priceCurrent: VND.format(16640000),
        city: 'Hàn Quốc',
        sold: getRandom(1, 10),
        saleOff: getRandom(10, 30),
        descTop: 'Khi đã biết iPhone 13 Pro Max 512GB giá bao nhiêu, bạn nên tham khảo thêm các thông tin chi tiết về sản phẩm để hiểu rõ hơn điểm nổi bật của sản phẩm so với thế hệ trước. Màn hình kích thước 6.7 inch trang bị công nghệ Super Retina XDR màu sắc sắc nét với độ sáng cao mang đến trải nghiệm vượt trội về mặt hình ảnh. Thêm vào đó, iPhone 13 Pro Max còn sở hữu con chip mạnh mẽ A15 Bionic hỗ trợ mạng 5G, Bộ nhớ trong 512GB, cụm camera 12MP cải tiến khả năng chụp ảnh, quay phim và ổn định hình ảnh quang học. Không chỉ vậy, thiết bị còn có khả năng sạc đầy khoảng 50% pin trong vòng 30 phút với sạc nhanh 20W.',
        imgDesc: 'https://down-vn.img.susercontent.com/file/6367156026c428fe40d3a0500b93bf1d_tn',
        descBottom: 'Với thông tin iPhone 13 Pro Max 512GB giá bao nhiêu và một số điểm nổi bật của sản phẩm, bạn đã có cho mình được những thông tin hữu ích. Xem thêm các thông tin khác tại website của CellphoneS hoặc đến trực tiếp cửa hàng để trải nghiệm nhé!'
    },
    {
        name: 'Điện thoại Apple iPhone 11 128GB',
        img: 'https://down-vn.img.susercontent.com/file/sg-11134201-23020-j9524z6y1cnv37_tn',
        imgSmall1: 'https://down-vn.img.susercontent.com/file/sg-11134201-23020-j9524z6y1cnv37_tn',
        imgSmall2: 'https://down-vn.img.susercontent.com/file/57e187cc75cd16692620b40cca0f4d8f_tn',
        imgSmall3: 'https://down-vn.img.susercontent.com/file/1d0ab8f623061b214013a1e2f202b289_tn',
        priceOld: VND.format(15990000),
        priceCurrentNumber: 12540000,
        priceCurrent: VND.format(12540000),
        city: 'Nhật Bản',
        sold: getRandom(1, 10),
        saleOff: getRandom(10, 30),
        descTop: 'Thiết kế bên ngoài của iPhone 11 được kế thừa và phát triển từ phiên bản tiền nhiệm đã được ra mắt trước đó là iPhone XR. Cụm camera của máy vẫn giữ nguyên thiết kế theo chiều dọc nhưng phần mô-đun chứa camera được mở rộng hơn đem tới những trải nghiệm hoàn toàn mới lạ cho người dùng. Phần viền thân máy và các góc cạnh của iPhone 11 được thiết kế dạng cong bo mềm mại. Kết hợp với trọng lượng chỉ vỏn vẹn 194 gram cùng kích thước sản phẩm lần lượt là 150.9 x 75.7 x 8.3 mm, iPhone thế hệ thứ 11 sẽ mang tới cho bạn cảm giác cầm nắm cực kỳ thoải mái. Bạn có thể thoải mái sử dụng sản phẩm cả ngày dài mà không cảm thấy khó chịu hay đau mỏi phần cổ tay. Các phím, nút điều chỉnh âm lượng của thiết bị được bố trí quanh viền thân máy, thể hiện sự hoàn hảo trong thiết kế của sản phẩm.',
        imgDesc: 'https://down-vn.img.susercontent.com/file/57e187cc75cd16692620b40cca0f4d8f_tn',
        descBottom: 'Về mặt hiển thị, iPhone 11 được người dùng đánh giá khá cao về độ chi tiết, sắc nét. Sản phẩm được ứng dụng công nghệ màn hình hiện đại HD Retina cùng tấm nền LCD kích thước 6.1 inch thế hệ mới, cho trải nghiệm hình ảnh chân thực và sống động tời từng điểm ảnh. Độ phân giải hình ảnh mà iPhone 11 đem tới cho người dùng luôn đạt chất lượng Full HD với mật độ điểm ảnh lên tới 326 ppi. Bên cạnh đó, các thông số về độ trễ màn hình, tần số quét của máy cũng nằm ở mức ổn định, cho trải nghiệm mượt mà, mềm mại trên từng khung hình hiển thị. Độ chính xác màu của sản phẩm đạt ở mức tối đa, đưa người dùng đến với thế giới hình ảnh rực rỡ sắc màu.'
    },
    {
        name: 'Điện thoại Apple iPhone 14 Plus 128GB',
        img: 'https://down-vn.img.susercontent.com/file/sg-11134201-23020-kp1wp9s91cnv9e_tn',
        imgSmall1: 'https://down-vn.img.susercontent.com/file/sg-11134201-23020-kp1wp9s91cnv9e_tn',
        imgSmall2: 'https://down-vn.img.susercontent.com/file/8b299a01bed582fe9b285405833dff97_tn',
        imgSmall3: 'https://down-vn.img.susercontent.com/file/ef7e86e59bc3f59667abe75b2cb523b4_tn',
        priceOld: VND.format(31990000),
        priceCurrentNumber: 22140000,
        priceCurrent: VND.format(22140000),
        city: 'Việt Nam',
        sold: getRandom(1, 10),
        saleOff: getRandom(10, 30),
        descTop: 'Đầu tiên, chúng ta sẽ thấy iPhone 14 Plus (cũng như toàn bộ series điện thoại iPhone 14) mang ngoại hình tương đồng với dòng iPhone 13 trước đó. Cụ thể, cạnh viền của máy sẽ được dát phẳng vuông vức và hoàn thiện từ thép không gỉ bền vững. Toàn bộ thân iPhone 14 Plus đều đạt chuẩn chống bụi và chống nước IP68, củng cố độ bền cao cấp cho thiết bị. Một điều chú ý ở iPhone 14 Plus đó là chiếc máy được cho rằng sẽ lấp vào khoảng trống giữa bản Pro và Pro Max. Vì vậy kích thước tổng thể của iPhone 14 Plus lớn hơn so với iPhone 14 bản chuẩn. Sự bổ sung của iPhone 14 Plus được cho là thay thế phiên bản Mini. Phiên bản iPhone 14 Plus có 5 màu sắc khác nhau mang đến cho người dùng nhiều sự lựa chọn: Blue, Purple, Starlight, Mid Night và Product Red.',
        imgDesc: 'https://down-vn.img.susercontent.com/file/8b299a01bed582fe9b285405833dff97_tn',
        descBottom: 'iPhone 14 Plus mới được trang bị chip và giữ nguyên cấu hình như trên 13 Pro và 13 Pro Max. Chi tiết hơn, Apple đã ứng dụng dòng CPU mang tên Apple A15 Bionic với 5 nhân đồ hoạ. Tuy nhiên, điều đáng chú ý ở đây đó là Apple chỉ mang chip A16 Bionic lên bản điện thoại iPhone 14 Pro và Pro Max. Tức là chỉ duy nhất iPhone 14 thường và iPhone 14 Plus vẫn sẽ sử dụng chip A15 Bionic - một yếu tố cho thấy tác động của chuỗi cung ứng đã ảnh hưởng lớn đến kế hoạch sản xuất của Apple năm nay. Sản phẩm mới dự kiến cũng trang bị RAM 6GB lớn và bộ nhớ trong lên đến 128GB. Nhờ vậy, người dùng dễ dàng lưu trữ các thông tin, kho hình ảnh, video hoặc các tệp khác một cách thoải mái.'
    },
    {
        name: 'Apple iPhone 14 Chính hãng VN/A',
        img: 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lgn5s2fxu7ua9d_tn',
        imgSmall1: 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lgn5s2fxu7ua9d_tn',
        imgSmall2: 'https://down-vn.img.susercontent.com/file/sg-11134201-22090-qu153g0oezhv5a_tn',
        imgSmall3: 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lgn5s2fxx0z69b_tn',
        priceOld: VND.format(26490000),
        priceCurrentNumber: 19890000,
        priceCurrent: VND.format(19890000),
        city: 'Trung Quốc',
        sold: getRandom(1, 10),
        saleOff: getRandom(10, 30),
        descTop: 'iPhone 14 vàng là phiên bản màu sắc mới được Apple cập nhật vào tháng 3/2023. Điện thoại iPhone 14 vàng chanh này được hoàn thiệt mặt sau bằng kinh và cạnh viền nhôm màu vàng rực rõ. Các chi tiết khác sẽ giống những mẫu iPhone 14 phiên bản màu khác. Cụ thể, iPhone 14 vàng được trang bị màn hình OLED 6.1 inch siêu sắc nét. Hiệu năng vượt trội tới từ chipset đầu bảng - A15 Bionic. Hệ thống camera với nhiều cải tiến mới cùng dung lượng pin 3279mAh giúp nâng cao trải nghiệm của người dùng. Ngoài sự khác biệt về sắc vàng thì phiên bản màu mới này của iPhone 14 sẽ không có sự thay đổi về thiết kế. Phần viền thân máy của iPhone 14 khá mỏng chỉ khoảng 7.8mm. Thiết kế tai thỏ trên iPhone 14 vàng cũng gọn hơn so với thế hệ iPhone 13. Các thông số còn lại của iPhone 14 so với thế hệ tiền nhiệm là gần như không có gì thay đổi. Máy vẫn sở hữu kiểu dáng vô cùng sang trọng, thời thượng. Những đường con bo mềm mại ở góc cùng cạnh viền thân máy được thiết kế dạng phẳng, giúp người dùng có cảm giác cầm nắm nhẹ nhàng, thoải mái.',
        imgDesc: 'https://down-vn.img.susercontent.com/file/sg-11134201-22090-qu153g0oezhv5a_tn',
        descBottom: 'Về chất lượng hình ảnh, iPhone 14 vàng được người dùng đánh giá khá cao về khả năng hiển thị siêu mượt mà và cực kỳ sống động. Cụ thể, màn hình của iPhone 14 được hoàn thiện từ tấm nền Super Retina XDR 6.1 inch cùng với độ phân giải lên tới 2532 x 1170 pixels. Đồng thời, iPhone 14 còn sở hữu tốc độ làm mới 60Hz cùng các cảm biến màn hình hiện đại như: cảm biến tiệm cận, cảm biến ánh sáng xung quanh. Nhờ đó, mọi khung hình chuyển động được thể hiện trên iPhone 14 vàng đều vô cùng mượt mà, chân thực.',
    },
    {
        name: 'Điện thoại Apple iPhone 13 Plus 128GB',
        img: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-llm05p5nkerg1c_tn',
        imgSmall1: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-llm05p5nkerg1c_tn',
        imgSmall2: 'https://down-vn.img.susercontent.com/file/daa08280bc4359e7f8bc00efdea89572_tn',
        imgSmall3: 'https://down-vn.img.susercontent.com/file/198720e37eeccfcdc98c6ea87f5decaa_tn',
        priceCurrentNumber: 18890000,
        priceCurrent: VND.format(18890000),
        priceOld: VND.format(22990000),
        city: 'Việt Nam',
        sold: getRandom(1, 10),
        saleOff: getRandom(10, 30),
        descTop: 'Những dòng iPhone đến từ nhà Apple đều có sức hút đặc biệt ngay từ thời điểm ra mắt và thế hệ Apple iPhone 13 Plus 128GB cũng không ngoại lệ. Có thể nói, Apple iPhone 13 Plus 128GB là sự kết hợp hoàn hảo giữa các yếu tố về thiết kế, cấu hình, tính năng, hệ điều hành,... Nếu bạn tò mò về siêu phẩm này, hãy đọc ngay phần đánh giá chi tiết bên dưới nhé. Màn hình viên thuốc độc đáo Ở dòng iPhone 14 Pro Max 128GB, Apple đã thay thế thiết kế tai thỏ truyền thống trước đó bằng thiết kế hình viên thuốc mới mẻ. Ưu điểm của thiết kế hình viên thuốc chính là không chiếm quá nhiều diện tích màn hình nhằm tối ưu hóa không gian hiển thị nội dung của smartphone. Ngoài ra, siêu phẩm mới của nhà Táo cũng sở hữu kích thước màn hình đạt 6.7 inch với độ phân giải 2796 x 1290 pixel, tấm nền OLED cùng công nghệ Retina độc quyền. Nhờ vào đó, người dùng sẽ có được những trải nghiệm giải trí và làm việc hoàn hảo với hình ảnh sắc nét và rực rỡ,.',
        imgDesc: 'https://down-vn.img.susercontent.com/file/daa08280bc4359e7f8bc00efdea89572_tn',
        descBottom: 'Nhằm giúp người dùng có thể sử dụng iPhone ngay dưới ánh nắng trực tiếp, Apple đã nâng cấp độ sáng tối đa đến 2000 nits ở siêu phẩm mới nhất. Hơn nữa, màn hình của máy cũng có khả năng tự động điều chỉnh ánh sáng phù hợp với môi trường giúp bảo vệ thị lực, cũng như tiết kiệm pin. Cũng giống với người tiền nhiệm, thế hệ iPhone 14 Pro Max cũng được trang bị tần số quét đạt 120Hz nhằm tạo nên trải nghiệm chạm vuốt mượt mà cho người dùng. Đặc biệt hơn, tần số quét trên máy có thể tự động thay đổi dao động từ 1Hz đến 120Hz giúp hạn chế tiêu thụ dung lượng pin trên máy.'
    },
    {
        name: 'Điện thoại OPPO A77s - Hàng chính hãng',
        img: 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lk4q9lkrne2q7e_tn',
        imgSmall1: 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lk4q9lkrne2q7e_tn',
        imgSmall2: 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lj2jepaq5vkc8b_tn',
        imgSmall3: 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lj2jepaq7a4se8_tn',
        priceOld: VND.format(6290000),
        priceCurrentNumber: 5290000,
        priceCurrent: VND.format(5290000),
        city: 'Hàn Quốc',
        sold: getRandom(1, 10),
        saleOff: getRandom(10, 30),
        descTop: 'OPPO A77s có một vẻ ngoài khá đẹp mắt khi được tạo hình theo kiểu vuông vức và cách phối màu ở mặt lưng độc đáo. Khung và mặt lưng phẳng giúp tôn lên vẻ thời thượng cho điện thoại, bởi đây được xem là kiểu dáng xu hướng và được người dùng khá ưa chuộng trong vài năm gần đây. Lần ra mắt này OPPO cho ra mắt hai phiên bản đó là đen và xanh ngọc dành cho A77s, đây được xem là hai màu khá phổ biến và bất kỳ nam hay nữ cũng đều có thể sử dụng một cách phù hợp. Và hiện trên tay mình đang là phiên bản màu xanh ngọc vô cùng độc đáo, mặt lưng của nó có thể chuyển màu tùy vào góc độ ánh sáng khác nhau. Điều này làm cho máy trở nên đẹp mắt và ấn tượng, hơn hết nó còn làm cho trải nghiệm của người dùng trở nên cực kỳ thú vị mà không hề bị nhàm chán.',      
        imgDesc: 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lj2jepaq5vkc8b_tn',
        descBottom: 'Cả hai phiên bản màu đều được làm từ khung nhựa và mặt lưng thủy tinh hữu cơ với kiểu hoàn thiện nhám nhẹ, cảm giác khi sờ vào khá bám tay, kể cả khi tay đang ẩm ướt mình vẫn có thể cầm chắc mà ít khi bị trơn tuột. Đặc biệt hơn là các vết xước nhẹ hay dấu vân tay cũng ít khi xuất hiện trên mặt lưng này. Ở mặt trước của điện thoại, OPPO A77s được trang bị một màn hình theo kiểu giọt nước cùng với các viền xung quanh tương đối mỏng. Tuy được tối ưu kích thước và làm trông khá nhỏ, kiểu hình notch giọt nước này vẫn được xem là một hạn chế, trong khi nhiều đối thủ đã trang bị hình notch dạng nốt ruồi lên trên những chiếc máy có cùng phân khúc giá. Nhằm mang đến trải nghiệm tốt hơn khi xem nội dung thì hãng cũng đã tối ưu viền màn hình đi khá nhiều, chúng trông mỏng hơn và cảm giác khi nhìn vào khá là dễ chịu và thoải mái.'
    },
    {
        name: 'Điện Thoại OPPO RENO8 Pro (12GB/256GB) - Hàng Chính Hãng - Quà tặng độc quyền',
        img: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lmfh16ltc7hbe3_tn',
        imgSmall1: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lmfh16ltc7hbe3_tn',
        imgSmall2: 'https://down-vn.img.susercontent.com/file/fd16f1572124d2ebcd062cdc955521d2_tn',
        imgSmall3: 'https://down-vn.img.susercontent.com/file/sg-11134201-22100-uqph3y7tx9hv81_tn',
        priceOld: VND.format(18990000),
        priceCurrentNumber: 14990000,
        priceCurrent: VND.format(14990000),
        city: 'Nhật Bản',
        sold: getRandom(1, 10),
        saleOff: getRandom(10, 30),
        descTop: 'Lần này nhà OPPO mang đến cho chúng ta một chiếc điện thoại có thiết kế đặc biệt, máy sở hữu một diện mạo khác hẳn với những chiếc điện thoại OPPO Reno trước đây, cách thiết kế này đã làm mình liên tưởng đến chiếc OPPO Find X5 Pro được ra mắt trước đó. Mặt lưng của điện thoại làm từ kính và được hoàn thiện bóng giúp máy trở nên nổi bật hơn, phần này bóng bẩy đến mức mình có thể soi gương một cách trực tiếp đối với phiên bản màu đen. Tuy nhiên đây cũng có thể coi như một điểm hạn chế bởi mặt lưng máy khá dễ bám dấu vân tay. ',
        imgDesc: 'https://down-vn.img.susercontent.com/file/sg-11134201-22100-uqph3y7tx9hv81_tn',
        descBottom: 'Đến phần mặt trước, OPPO trang bị một màn hình có thiết kế dạng đục lỗ và được hoàn thiện phẳng, so với những dòng Reno trước đây thì Reno8 Pro được xem như thiết bị có viền mỏng nhất mà mình từng sử dụng. Viền màn hình trên Reno8 Pro có kích thước gần như bằng nhau, điều này giúp màn hình trở nên cân đối hơn, cảm giác khi mình nhìn vào rất dễ chịu, xem phim hay chơi game cũng vô cùng đã mắt.'
    },
    {
        name: 'Điện Thoại OPPO RENO8 5G (8GB/256GB) - Hàng Chính Hãng',
        img: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lmfh16lt7zrza3_tn',
        imgSmall1: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lmfh16lt7zrza3_tn',
        imgSmall2: 'https://down-vn.img.susercontent.com/file/sg-11134201-23010-4so0k5f7eqmvab_tn',
        imgSmall3: 'https://down-vn.img.susercontent.com/file/sg-11134201-23010-oq7f6zf7eqmvd8_tn',
        priceOld: VND.format(13990000),
        priceCurrentNumber: 9590000,
        priceCurrent: VND.format(9590000),
        city: 'Việt Nam',
        sold: getRandom(1, 10),
        saleOff: getRandom(10, 30),
        descTop: 'Qua những lần chạm đầu tiên trên chiếc Reno8 T 5G thì mình thấy đây là một chiếc điện thoại có độ hoàn thiện khá tốt, máy mang lại cho mình một cảm giác cầm nắm tương đối là đầm tay, hai bên cạnh cũng được làm bo cong giúp hạn chế tình trạng cấn tay mang đến cho mình một trải nghiệm sử dụng khá là thoải mái. Trên tay mình đây hiện đang là phiên bản màu đen có hiệu ứng phản quang khá bắt mắt, đây có thể coi là phiên bản màu truyền thống và quen thuộc đến từ nhà OPPO, nhưng lần này hãng làm cho nó trở nên nổi bật hơn bằng cách tạo thêm một vệt bóng theo kiểu mặt nhẵn ở bên dưới trông khá lạ mắt.',
        imgDesc: 'https://down-vn.img.susercontent.com/file/sg-11134201-23010-4so0k5f7eqmvab_tn',
        descBottom: 'Ngoại trừ cụm camera và phần vệt bóng bên trên ra thì gần như mọi vị trí khác trên mặt lưng đều được làm theo kiểu nhám, nhờ đó mà hiện tượng bám dấu vân tay cũng được hạn chế khá nhiều để mang đến cho mình cảm giác cầm chắc tay hơn. Điều làm mình ấn tượng nhất về chiếc máy này có lẽ là cách mà hãng tối ưu kích thước cạnh viền, theo mình điều này cũng nhờ một phần từ việc thiết kế màn hình bo cong nên khi xem một vài tựa phim hay chơi game có tone màu tối máy làm cho mình có cảm giác như đang sử dụng một chiếc điện thoại không viền.'
    },
    {
        name: 'Điện thoại gập Oppo Find N2 , Find N2 Flip (12/256GB) Hàng nhập khẩu nội địa [BH 12 tháng,tặng kèm ốp lưng,cường lực]',
        img: 'https://down-vn.img.susercontent.com/file/vn-11134201-7r98o-llj5orytob0o25_tn',
        imgSmall1: 'https://down-vn.img.susercontent.com/file/vn-11134201-7r98o-llj5orytob0o25_tn',
        imgSmall2: 'https://down-vn.img.susercontent.com/file/vn-11134201-7r98o-llj5oruxtzns36_tn',
        imgSmall3: 'https://down-vn.img.susercontent.com/file/vn-11134201-7r98o-llj5orsgsjw6bb_tn',
        priceOld: VND.format(5990000),
        priceCurrentNumber: 4560000,
        priceCurrent: VND.format(4560000),
        city: 'Trung Quốc',
        sold: getRandom(1, 10),
        saleOff: getRandom(10, 30),
        descTop: 'Android 14 đang được phát hành dưới dạng beta trên nhiều thiết bị, trong đó OPPO Find N2 Flip là chiếc điện thoại gập đầu tiên. Cùng với một số nhà sản xuất thiết bị khác, OPPO (và thương hiệu con OnePlus) đã ra mắt bản Beta Android 14 đầu tiên của họ. OPPO Find N2 Flip, ra mắt toàn cầu vào đầu năm nay, giờ đây đã đủ điều kiện để tải xuống bản beta Android 14 và là chiếc điện thoại gập đầu tiên làm được điều đó. Phiên bản beta thì không ổn định, chỉ dành cho người dùng thích "vọc vạch" và nhà phát triển nhưng mang lại những tính năng mới nhất mà Google đã đưa vào nền tảng Android. Bản cập nhật hiện đã có sẵn trực tiếp từ OPPO nhưng chỉ được tối ưu hóa cho một số phiên bản của thiết bị.',
        imgDesc: 'https://down-vn.img.susercontent.com/file/vn-11134201-7r98o-llj5orytob0o25_tn',
        descBottom: 'Các biến thể OPPO Find N2 Flip dành cho Ấn Độ, Thái Lan và Malaysia đều tương thích, mỗi biến thể sử dụng các bản phần mềm riêng biệt. OPPO cũng đang ra mắt các phiên bản ổn định của Android 13 cho các thiết bị này trong trường hợp bạn quyết định hạ cấp từ bản Beta Android 14. OPPO cho biết Find N2 Flip sẽ nhận được bản cập nhật đầy đủ Android 14 vào cuối năm nay.'
    }
]