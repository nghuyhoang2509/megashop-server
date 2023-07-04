module.exports = {
  /**
   * @param  {...any} args
   * @description Hàm kiểm tra xem dữ liệu có falsy hay không
   */
  checkEmpty(...args) {
    if (args.find((arg) => !arg) != undefined) {
      throw new Error("Dữ liệu không hợp lệ");
    }
  },
  /**
   *
   * @param {String} email
   * @description Hãy kiểm tra email có đúng định dàng hay không
   */
  checkEmail(email) {
    let emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.match(emailformat)) {
      throw new Error("Email không đúng định dạng ");
    }
  },
  /**
   *
   * @param {String} fullName
   * @description Hãy kiểm tra fullName đúng định dạng >=8 && <=100
   */
  checkFullName(fullName) {
    if (!(fullName.length >= 8 && fullName.length <= 100)) {
      throw new Error("FullName không đúng định dang >=8 && <=100");
    }
  },
  /**
   *
   * @param {String} phone
   * @description Kiểm tra params truyền vào có phải là số điện thoại hay không
   */
  checkIsPhone(phone) {
    let regex = /^\d{10}$/;
    if (!regex.test(phone)) {
      throw new Error("Số điện thoại sai định dạng");
    }
  },
  /**
   *
   * @param {String} password
   * @description Hàm kiểm tra password đúng định dạng >=8 && <=24
   */
  checkPassword(password) {
    if (!(password.length >= 8 && password.length <= 24)) {
      throw new Error("password không đúng định dạng >=8 && <=24");
    }
  },
};
