export const viApi: Record<string, string> = {
  'API 使用': 'Hướng dẫn API',
  '从其他工具安全调用当前 OmniMail 实例。':
    'Gọi bản OmniMail này một cách an toàn từ công cụ khác.',
  '完整 API 文档': 'Tài liệu API đầy đủ',
  '完整 API 参考': 'Tham chiếu API đầy đủ',
  '已按 Worker 路由源码核对并覆盖全部 {count} 个接口；展开任一接口即可查看权限、参数、响应和可复制示例。':
    'Đã đối chiếu mã định tuyến Worker và gồm đủ {count} giao diện. Mở một giao diện để xem quyền, tham số, phản hồi và ví dụ có thể sao chép.',
  '源码覆盖 {count}/{count}': 'Độ phủ mã nguồn {count}/{count}',
  '搜索接口': 'Tìm giao diện',
  '搜索路径、方法、用途或参数': 'Tìm đường dẫn, phương thức, mục đích hoặc tham số',
  '按 API 模块筛选': 'Lọc theo nhóm API',
  '当前显示 {count} 个接口': 'Đang hiện {count} giao diện',
  '{count} 个接口': '{count} giao diện',
  '公开接口': 'Công khai',
  '可选认证': 'Xác thực không bắt buộc',
  '登录或 Bearer Token': 'Phiên đăng nhập hoặc bearer token',
  '仅网站 Cookie': 'Chỉ cookie trang web',
  '管理员': 'Quản trị viên',
  '仅主管理员': 'Chỉ chủ quản trị',
  'Webhook 签名': 'Chữ ký webhook',
  '认证与权限': 'Xác thực và quyền',
  '请求参数': 'Yêu cầu',
  '成功响应': 'Phản hồi thành công',
  '使用注意': 'Lưu ý khi dùng',
  '调用示例': 'Ví dụ yêu cầu',
  '没有匹配的 API 接口': 'Không có giao diện API khớp',
  '尝试搜索 messages、token、admin 或字段名称。':
    'Thử tìm messages, token, admin hoặc tên trường.',
  '清除筛选': 'Xóa bộ lọc',
  '令牌与凭据安全': 'An toàn mã và thông tin đăng nhập',
  '调用完整接口目录前，请先确认自动化工具能够安全保存和轮换凭据。':
    'Trước khi dùng danh mục đầy đủ, hãy chắc công cụ tự động lưu và đổi thông tin đăng nhập một cách an toàn.',
  '当前实例': 'Bản đang dùng',
  '连接一次，按账户权限访问': 'Kết nối một lần, truy cập theo quyền tài khoản',
  'OmniMail 使用设备会话令牌，不提供永久 API Key。先签发短期 Access Token，再通过 Authorization 请求头调用接口。':
    'OmniMail dùng mã phiên thiết bị, không có API key vĩnh viễn. Cấp access token ngắn hạn, rồi gọi giao diện bằng tiêu đề Authorization.',
  'API 基础地址': 'Địa chỉ gốc API',
  '认证方式': 'Cách xác thực',
  '15 分钟': '15 phút',
  '30 天': '30 ngày',
  '内容已复制到剪贴板。': 'Đã sao chép vào bộ nhớ tạm.',
  '无法访问剪贴板，请手动复制内容。':
    'Không truy cập được bộ nhớ tạm. Hãy sao chép thủ công.',
  '获取设备令牌': 'Lấy mã thiết bị',
  '使用登录邮箱和密码签发令牌。令牌明文只返回一次，请立即保存到工具的加密凭据存储。':
    'Cấp mã bằng email và mật khẩu đăng nhập. Mã dạng chữ chỉ trả về một lần; hãy lưu ngay vào kho thông tin đã mã hóa của công cụ.',
  '启用了 MFA？': 'Đang dùng MFA?',
  '把 mfaCode 替换为当前验证码或恢复码；未启用 MFA 时该字段会被忽略。':
    'Thay mfaCode bằng mã xác minh hoặc mã khôi phục hiện tại. Trường này bị bỏ qua nếu chưa bật MFA.',
  '仅 Linux DO 登录的账户': 'Tài khoản chỉ đăng nhập bằng Linux DO',
  '设备令牌接口当前需要密码凭据；仅通过 Linux DO 创建且没有密码的账户暂时不能使用此签发流程。':
    'Giao diện mã thiết bị hiện cần mật khẩu. Tài khoản chỉ tạo qua Linux DO và không có mật khẩu chưa dùng được quy trình này.',
  '调用邮件接口': 'Gọi giao diện thư',
  '把返回的 accessToken 放入 Authorization 请求头。下面的示例读取收件箱第一页。':
    'Đặt accessToken trả về vào tiêu đề Authorization. Ví dụ bên dưới đọc trang đầu của hộp thư đến.',
  '选择代码示例': 'Chọn ví dụ mã',
  '接入 n8n、Postman 或其他工具': 'Kết nối n8n, Postman hoặc công cụ khác',
  '在工具的 HTTP Request 步骤中填写相同的 URL、方法和请求头；无需 OmniMail 专用插件。':
    'Điền cùng URL, phương thức và tiêu đề ở bước HTTP Request của công cụ. Không cần plugin riêng cho OmniMail.',
  '请求方法': 'Phương thức',
  '认证': 'Xác thực',
  '请求头': 'Tiêu đề',
  '请求与响应': 'Yêu cầu và phản hồi',
  'JSON 请求需要 Content-Type: application/json。':
    'Yêu cầu JSON cần Content-Type: application/json.',
  '收到 401 时最多刷新一次；刷新失败后重新登录。':
    'Khi nhận 401, chỉ làm mới tối đa một lần. Nếu làm mới thất bại thì đăng nhập lại.',
  '邮件分页游标必须原样传回，不能解析或修改。':
    'Con trỏ phân trang thư phải gửi lại nguyên trạng, không phân tích hoặc sửa.',
  '发信接口仍会检查邮箱归属、账户权限和发送限速。':
    'Giao diện gửi thư vẫn kiểm tra quyền sở hữu hộp thư, quyền tài khoản và giới hạn gửi.',
  '浏览器跨域调用': 'Gọi từ trình duyệt khác nguồn',
  '命令行和服务端工具可以直接请求。其他网页前端必须先把精确来源加入 Worker 的 APP_ORIGINS。':
    'Công cụ dòng lệnh và phía máy chủ gọi trực tiếp được. Trang web khác phải thêm đúng nguồn vào APP_ORIGINS của Worker trước.',
  '刷新与撤销令牌': 'Làm mới và thu hồi mã',
  '刷新会同时轮换两个令牌。工具必须原子替换保存的 Refresh Token，退出时再主动撤销。':
    'Làm mới sẽ đổi cả hai mã. Công cụ phải thay refresh token đã lưu trong một bước, rồi chủ động thu hồi khi ngắt kết nối.',
  '刷新令牌': 'Làm mới mã',
  'Access Token 过期后调用': 'Gọi sau khi access token hết hạn',
  '撤销令牌': 'Thu hồi mã',
  '停用集成或退出时调用': 'Gọi khi ngắt tích hợp hoặc đăng xuất',
  '常用邮件接口': 'Giao diện thư thường dùng',
  '路径均相对于上方 API 基础地址；完整参数和返回结构请查看原始文档。':
    'Đường dẫn tính từ địa chỉ gốc API ở trên. Xem tài liệu đầy đủ để biết tham số và cấu trúc trả về.',
  '读取当前账户的邮箱地址': 'Liệt kê hộp thư của tài khoản hiện tại',
  '读取、筛选并分页浏览邮件': 'Đọc, lọc và phân trang thư',
  '读取邮件正文、线程与附件信息': 'Đọc nội dung thư, chuỗi thư và thông tin tệp đính kèm',
  '使用已配置的发信服务发送邮件': 'Gửi thư qua dịch vụ đã cấu hình',
  '读取当前账户的草稿': 'Liệt kê thư nháp của tài khoản hiện tại',
  '回复邮件并可附加文件': 'Trả lời thư và có thể đính kèm tệp',
  '不要把令牌写入日志或普通配置文件':
    'Đừng ghi mã vào nhật ký hoặc tệp cấu hình thường',
  'Access Token 只保存在运行内存；Refresh Token 应放入系统或自动化平台提供的加密凭据存储。':
    'Access token chỉ giữ trong bộ nhớ lúc chạy. Refresh token nên để trong kho thông tin đã mã hóa của hệ thống hoặc nền tảng tự động.',
}
