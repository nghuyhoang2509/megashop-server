"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("products", [
      {
        name: "Laptop Xiaomi RedmiBook 15 JYU4506AP",
        desc: "Ram 8GB, Chip Intel Core i5 thế hệ 11 - Xử lý liền mạch các tác vụ hằng ngày\nMàn hình FHD, kích thước 15.6 inch - Màn hình lớn cải thiện chất lượng làm việc Laptop Xiaomi Redmibook 15 JYU4506AP –hoạt động mạnh mẽ\nLaptop Xiaomi Redmibook 15 JYU4506AP là dòng máy bình dân được sản xuất dành cho học sinh, sinh viên hoặc dân văn phòng. Thiết bị được trang bị bộ vi xử lý cao cấp, bộ nhớ có dung lượng cao cùng nhiều ưu điểm vượt trội khác nên ngay từ khi mới ra mắt sản phẩm đã nhanh chóng chiếm được cảm tinh nhiều người dùng.",
        quantity: 0,
        price: 13290000,
        salesPrice: 13190000,
        image:
          "https://res.cloudinary.com/dbpvy9xt6/image/upload/f_auto,q_auto/v1/product/lsupyihggsejjuhf59y3",
        categoryId: 1,
      },
      {
        name: "Laptop Asus Gaming Rog Strix G15 G513IH HN015W",
        desc: '"Chip R7-4800H cùng card đồ họa rời Geforce GTX 1650 cho khả năng chiến các tựa game nặng, chỉnh sửa hình ảnh trên PTS, Render video ngắn mượt mà\nRam 8GB + 1 khe, nâng cấp tối đa 32GB cùng ổ cứng SSD có không gian lưu trữ lên tới 512GB cho tốc độ xử lý mượt mà, nhanh chóng, không lo giật lag Laptop Asus gaming Rog Strix G15 G513IH-HN015W - Cấu hình mạnh mẽ chiến game\nAsus ROG Strix G15 G513IH-HN015TW là chiếc laptop có cấu hình mạnh mẽ, đáp ứng được hầu hết các tựa game trên thị trường hiện nay. Ngay cả khi hoạt động trong nhiều giờ liền máy vẫn khá mát mẻ do có hệ thống tản nhiệt cao cấp. Nếu bạn là một game thủ hay người dùng muốn tìm máy có cấu hình cao thì đừng bỏ qua chiếc laptop Asus chất lượng này.',
        quantity: 123,
        price: 17990000,
        salesPrice: 17890000,
        image:
          "https://res.cloudinary.com/dbpvy9xt6/image/upload/f_auto,q_auto/v1/product/lsupyihggsejjuhf59y3",
        categoryId: 1,
      },
      {
        name: "Laptop ASUS Gaming TUF FX506LHB-HN188W",
        desc: '"Chip I5-10300H cùng card đồ họa rời GeForce GTX 1650 edit video thoải mái, chiến game hiệu năng hàng đầu\nRam 8GB, nâng cấp tối đa 32GB cùng ổ cứng SSD có không gian lưu trữ lên tới 512GB mang lại thời gian khởi động hay load ứng dụng nhanh chóng Laptop ASUS TUF Gaming F15 FX506LHB-HN188W - Tuyệt phẩm gaming đồ họa nặng\nVới những tựa game "bom tấn" gay cấn và hấp dẫn hiện nay, game thủ sẽ cần đến laptop ASUS TUF Gaming F15 FX506LHB-HN188W chứa đựng CPU Intel thế hệ 10 cùng đồ họa GeForce GTX để có được trải nghiệm gaming tối ưu ở thiết lập đồ họa cao.',
        quantity: 123,
        price: 15490000,
        salesPrice: 15390000,
        image:
          "https://res.cloudinary.com/dbpvy9xt6/image/upload/f_auto,q_auto/v1/product/hpmlnnm8qe9tev2vbztu",
        categoryId: 1,
      },
      {
        name: "Laptop HP Envy X360 13-BD0063DX",
        desc: "Được trang bị màn hình 13.3 inch nhỏ gọn, khung viền mỏng nhẹ với trọng lượng chỉ 1.32 kg.\nĐộ phân giải Full HD mang lại khả năng hiển thị sắc nét.\nMáy hỗ trợ màn hình cảm ứng đa điểm cùng độ sáng lên đến 1000 nits giúp người dùng dễ dàng thao tác, thỏa sức sáng tạo. Laptop HP Envy X360 13-BD0063DX – Laptop nhỏ gọn hỗ trợ cảm ứng\nHP là một thương hiệu laptop với nhiều sản phẩm chất lượng được người sử dụng tin dùng. Với sản phẩm HP Envy X360 13-BD0063DX cũng sẽ không làm người dùng thất vọng, laptop sở hữu một thiết kế nhỏ gọn cùng cấu hình đáp ứng tốt nhiều nhu cầu sử dụng.",
        quantity: 123,
        price: 17990000,
        salesPrice: 17890000,
        image:
          "https://res.cloudinary.com/dbpvy9xt6/image/upload/f_auto,q_auto/v1/product/lsupyihggsejjuhf59y3",
        categoryId: 1,
      },
      {
        name: "Laptop HP Gaming Victus 15-FA0031DX 6503849",
        desc: "Siêu phẩm laptop Gaming đến từ nhà HP với kích thước 15.6 inch, độ phân giải Full HD đi kèm tần số quét lên đến 144Hz hạn chế giật, xé hình, cho tốc độ mượt mà thao tác mướt mắt.\nMáy trang bị CPU Intel Core i5-12450H cùng card đồ họa NVIDIA GeForce GTX 1650 cân mọi tựa game phổ biến hiện nay hay dễ dàng thiết kế, sáng tạo trên Photoshop, Canva, Figma,... Laptop HP Gaming Victus 15-FA0031DX 6503849 - Hiệu năng mạnh mẽ\nLaptop HP Gaming Victus 15-FA0031DX 6503849 mang đến một sản phẩm tuyệt vời cho cộng đồng game thủ với màn hình đẹp mắt cùng khả năng hoạt động ấn tượng. Bạn sẽ có cơ hội trải nghiệm chơi game mượt mà đi kèm với khung hình sắc nét, sinh động khi sở hữu laptop HP này trong tay.",
        quantity: 123,
        price: 16790000,
        salesPrice: 16690000,
        image:
          "https://res.cloudinary.com/dbpvy9xt6/image/upload/f_auto,q_auto/v1/product/lsupyihggsejjuhf59y3",
        categoryId: 1,
      },
      {
        name: "Laptop Dell Inspiron 16 5620 N6I7110W1",
        desc: "Bộ vi xử lý Intel Core i7 cho một hệ thống giải quyết mọi tác vụ văn phòng được trơn tru nhất.\nHoạt động nhanh hơn, load mọi dữ liệu thông tin mượt hơn khi trang bị thêm 8GB RAM DDR4. Laptop Dell Inspiron 16 5620 N6I7110W1 - Mạnh mẽ và vô cùng gọn nhẹ\nLaptop Dell Inspiron 16 5620 N6I7110W1, siêu phẩm máy tính xách tay Dell Inspiron sở hữu hiệu năng mạnh mẽ với chip Intel Core i7 cùng màn hình kích thước lớn lên tới 16 inch. Tuy vậy nhưng Dell Inspiron 16 5620 N6I7110W1 vẫn đảm bảo được sự mỏng nhẹ cùng một thiết kế trẻ trung, tinh tế mang đậm thương hiệu Dell Inspiron.",
        quantity: 123,
        price: 21790000,
        salesPrice: 21690000,
        image:
          "https://res.cloudinary.com/dbpvy9xt6/image/upload/f_auto,q_auto/v1/product/lsupyihggsejjuhf59y3",
        categoryId: 1,
      },
      {
        name: "Laptop Dell gaming G15 5511 4XJ74 Nhập khẩu chính hãng",
        desc: "NVIDIA GeForce RTX 3050 - Cấu hình chơi game và đồ họa đỉnh cao, cân mọi tựa game.\nRam 8GB, SSD 256GB - Khởi động ứng dụng nhanh chóng, đa nhiệm mượt mà. Ngoại hình mạnh mẽ, bàn phím đèn nền, hình ảnh 120 Hz rõ chi tiết\nDell Gaming G15 5511 4XJ74 - chiếc laptop Dell Gaming được sinh ra cho những gamer đích thực, với thiết kế mạnh mẽ đầy ấn tượng trên từng chi tiết. Chất liệu bền bỉ cùng lớp vỏ hoàn thiện tinh xảo giúp tăng độ bền và giữ vẻ đẹp dài lâu cho tổng thể thân máy. Phiên bản Xám hầm hố cũng giúp tăng nét mạnh mẽ của laptop Dell Gaming G15 5511 4XJ74.",
        quantity: 123,
        price: 26990000,
        salesPrice: 26890000,
        image:
          "https://res.cloudinary.com/dbpvy9xt6/image/upload/f_auto,q_auto/v1/product/lsupyihggsejjuhf59y3",
        categoryId: 1,
      },
      {
        name: "iPhone 14 Pro Max",
        desc: "Máy mới 100% , chính hãng Apple Việt Nam.\nCellphoneS hiện là đại lý bán lẻ uỷ quyền iPhone chính hãng VN/A của Apple Việt Nam iPhone 14 Pro Max là mẫu flagship nổi bật nhất của Apple trong lần trở lại năm 2022 với nhiều cải tiến về công nghệ cũng như vẻ ngoài cao cấp, sang chảnh hợp với gu thẩm mỹ đại chúng. Những chiếc điện thoại đến từ nhà Táo Khuyết nhận được rất nhiều sự kỳ vọng của thị trường ngay từ khi chưa ra mắt. Vậy liệu những chiếc flagship đến từ công ty công nghệ hàng đầu thế giới này có làm bạn thất vọng? Cùng khám phá những điều thú vị về iPhone 14 Pro Max ở bài viết dưới đây nhé.",
        quantity: 123,
        price: 26990000,
        salesPrice: 26890000,
        image:
          "https://res.cloudinary.com/dbpvy9xt6/image/upload/v1687768368/product/bfh9drykmje25tzxa7rt.png",
        categoryId: 3,
      },
      {
        name: "Samsung Galaxy Z Fold4",
        desc: "Mới, đầy đủ phụ kiện từ nhà sản xuất\nBảo hành chính hãng 12 tháng tại trung tâm bảo hành ủy quyền, 1 đổi 1 trong 30 ngày nếu có lỗi phần cứng từ NSX. (xem chi tiết) Thông tin mới nhất về điện thoại Samsung Z Fold 4\nTheo các nguồn thông tin gần đây, điện thoại Galaxy Z Fold 2022sẽ có những điểm mới về màu sắc, phiên bản dung lượng bộ nhớ, hiệu năng, camera cùng thiết kế mới. Dưới đây là những thông tin mới nhất về siêu phẩm màn hình gập Samsung Z Fold 4 vừa được trình làng mới đây.",
        quantity: 123,
        price: 31990000,
        salesPrice: 31890000,
        image:
          "https://res.cloudinary.com/dbpvy9xt6/image/upload/f_auto,q_auto/v1/product/ouic5pghprstpazdtouc",
        categoryId: 3,
      },
      {
        name: "Xiaomi Redmi Note 11 Pro",
        desc: "Nguyên hộp, đầy đủ phụ kiện từ nhà sản xuất\nMáy, Sách hướng dẫn, Cây lấy sim, Ốp lưng, Cáp Type C, Củ sạc nhanh rời đầu Type A 67W Xiaomi Redmi Note 11 Pro là sản phẩm smartphone giá rẻ của thương hiệu Xiaomi. Điện thoại sở hữu màn hình AMOLED kích thước 6.67 inch cùng độ phân giải FHD+ giúp các chi tiết hiển thị rõ nét. Bên cạnh đó, thiết bị còn được trang bị con chip MediaTek Helio G96 cùng bộ nhớ RAM 8GB giúp mang lại khả năng hoạt động ổn định và mượt mà.",
        quantity: 123,
        price: 5790000,
        salesPrice: 5690000,
        image:
          "https://res.cloudinary.com/dbpvy9xt6/image/upload/f_auto,q_auto/v1/product/ouic5pghprstpazdtouc",
        categoryId: 3,
      },
      {
        name: "OPPO Reno8 T 5G",
        desc: "Mới, đầy đủ phụ kiện từ nhà sản xuất\nBảo hành 12 tháng tại trung tâm bảo hành Chính hãng. 1 đổi 1 trong 30 ngày nếu có lỗi phần cứng từ nhà sản xuất. (xem chi tiết) OPPO Reno8 T sở hữu hiệu năng mạnh mẽ, trang bị bộ vi xử lý thế hệ mới Snapdragon 695, tấm nền AMOLED 6.7 inch, màn hình 1 tỉ màu mang lại chất lượng hình ảnh siêu sắc nét và sống động tới từng chi tiết.\n\nDung lượng Pin điện thoại Reno8 T 5G lên tới 4800mAh cùng thông số bộ nhớ đạt 8GB RAM và 128GB ROM giúp người dùng có thể thoải mái trải nghiệm mà không cần lo về vấn đề năng lượng hay bộ nhớ lưu trữ trong quá trình sử dụng.",
        quantity: 123,
        price: 9690000,
        salesPrice: 9590000,
        image:
          "https://res.cloudinary.com/dbpvy9xt6/image/upload/f_auto,q_auto/v1/product/ouic5pghprstpazdtouc",
        categoryId: 3,
      },
      {
        name: "Samsung Galaxy Tab A8 (2022)",
        desc: "Mới, đầy đủ phụ kiện từ nhà sản xuất\nMáy, Sách hướng dẫn, Cây lấy sim, Cáp Type C - Type A, Củ sạc rời đầu Type A Samsung Galaxy Tab A8 - Thiết kế hiện đại, hiệu năng ổn định\nHiện nay máy tính bảng ngày càng được sử dụng rộng rãi bởi sự tiện dụng mà nói mang lại. Hiểu được điều đó, hãng điện thoại Samsung luôn nâng cấp và cải tiến các dùng tablet của mình. Với máy tính bảng Samsung Tab A8 phiên bản năm 2022 sẽ có nhiều nâng cấp về thiết kế và cấu hình.",
        quantity: 123,
        price: 6490000,
        salesPrice: 6390000,
        image:
          "https://res.cloudinary.com/dbpvy9xt6/image/upload/v1687768368/product/bfh9drykmje25tzxa7rt.png",
        categoryId: 2,
      },
      {
        name: "OPPO Pad Air 128GB",
        desc: "Mới, đầy đủ phụ kiện từ nhà sản xuất\nMáy tính bảng OPPO Pad Air x 1\nCáp sạc USB x 1\nBộ sạc x 1\nHướng dẫn sử dụng x 1\nThẻ bảo hành x 1 Thiết kế dẫn đầu xu hướng - Thanh mảnh, mỏng nhẹ chỉ 440g\nKhông gian hiển thị mãn nhãn - Màn hình IPS LCD kích thước 10.36 inch độ phân giải 1200 x 2000 Pixels\nCấu hình ổn định, xử lí đa tác vụ - Qualcomm Snapdragon 680, 4GB\nHỗ trợ chụp ảnh quay phim rõ nét - Camera 8 MP với khẩu độ f/2.0, lấy nét tự động liên tục",
        quantity: 0,
        price: 7990000,
        salesPrice: 7890000,
        image:
          "https://res.cloudinary.com/dbpvy9xt6/image/upload/v1687768368/product/bfh9drykmje25tzxa7rt.png",
        categoryId: 2,
      },
      {
        name: "Củ sạc Samsung 25W kèm cáp Type-C to Type-C",
        desc: "Mới, đầy đủ phụ kiện từ nhà sản xuất\nCủ sạc, Cáp sạc, Sách hướng dẫn Củ sạc nhanh Samsung 25W kèm cáp type C to type C: Tăng tốc độ sạc ấn tượng và an toàn\nChắc hẳn bất kỳ ai sử dụng điện thoại đều đã lâm vào tình trạng hết pin đột xuất, cùng lúc đó bạn đang rất vội và cần tới việc sử dụng điện thoại. Vậy làm cách nào để điện thoại có thể sạc pin nhanh chóng, quay lại sử dụng giúp bạn xử lý công việc tức khắc và cần thiết? Nắm được nhu cầu thiết yếu đó, Samsung đã cho ra mắt dòng sản phẩm củ sạc nhanh Samsung 25W kèm cáp C to C giúp bạn lúc vội vàng.",
        quantity: 123,
        price: 480000,
        salesPrice: 380000,
        image:
          "https://res.cloudinary.com/dbpvy9xt6/image/upload/f_auto,q_auto/v1/product/lsupyihggsejjuhf59y3",
        categoryId: 4,
      },
      {
        name: "Củ sạc Xiaomi 20W cổng USB-C",
        desc: "Mới, đầy đủ phụ kiện từ nhà sản xuất\nCủ sạc, Cáp sạc, Sách hướng dẫn Sạc Xiaomi USB-C 20W – Phụ kiện sạc nhanh 20W tiện lợi\nHiện nay đa số các thiết bị smartphone đều được trang bị công nghệ sạc nhanh rút rút gọn tối đa thời gian sạc. Do đó những phụ kiện cáp - củ sạc nhanh ngày càng được quan tâm. Nắm bắt được điều đó, Xiaomi mới đây đã cho ra mắt củ sạc Xiaomi USB-C hỗ trợ sạc nhanh 20W tiện lợi.",
        quantity: 123,
        price: 220000,
        salesPrice: 120000,
        image:
          "https://res.cloudinary.com/dbpvy9xt6/image/upload/f_auto,q_auto/v1/product/hpmlnnm8qe9tev2vbztu",
        categoryId: 4,
      },
      {
        name: "Pin sạc dự phòng Xiaomi Redmi 20000mAh sạc nhanh 18W",
        desc: "Mới, đầy đủ phụ kiện từ nhà sản xuất\nCủ sạc, Cáp sạc, Sách hướng dẫn Pin dự phòng Xiaomi Redmi 20000mAh – Phụ kiện pin sạc an toàn, hiệu suất cao\nXiaomi là thương hiệu vốn nổi tiếng với nhiều người tiêu dùng không chỉ bởi những chiếc điện thoại chất lượng, cấu hình cao giá rẻ mà còn những phụ kiện pin dự phòng cũng được nhiều người tin dùng. Dung lượng 20000mAh, cùng với khả năng sạc nhanh 18W thì pin sạc dự phòng Xiaomi Redmi 20000mAh sạc nhanh 18W là một lựa chọn hợp lý và hấp dẫn.",
        quantity: 123,
        price: 580000,
        salesPrice: 480000,
        image:
          "https://res.cloudinary.com/dbpvy9xt6/image/upload/f_auto,q_auto/v1/product/hpmlnnm8qe9tev2vbztu",
        categoryId: 4,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
