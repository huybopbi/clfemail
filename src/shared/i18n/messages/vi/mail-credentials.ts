export const viMailCredentials: Record<string, string> = {
  '升级说明': 'Hướng dẫn cập nhật',
  '建议切换到全局密钥': 'Nên chuyển sang một khóa dùng chung',
  'OmniMail 已支持用一份全局密钥统一加密所有邮箱凭据。为方便后续配置和维护，建议已部署用户尽快完成切换。':
    'OmniMail đã hỗ trợ một khóa dùng chung để mã hóa thông tin đăng nhập của mọi nhà cung cấp thư. Nên chuyển sớm để cấu hình và bảo trì đơn giản hơn.',
  '只需维护一份密钥': 'Chỉ cần giữ một khóa',
  '统一管理各邮箱的加密配置，减少重复设置和备份。':
    'Quản lý mã hóa thư ở một chỗ, ít thiết lập và ít khóa phải sao lưu hơn.',
  '接入新邮箱更省心': 'Thêm nhà cung cấp thư dễ hơn',
  '后续接入其他邮箱服务时，无需再单独新增加密密钥。':
    'Khi thêm dịch vụ thư khác, không cần tạo thêm khóa mã hóa riêng.',
  '保留已有邮箱绑定': 'Giữ tài khoản đã kết nối',
  '按向导迁移已保存的凭据，无需重新绑定账号，并可随时暂停后继续。':
    'Làm theo hướng dẫn để chuyển thông tin đã lưu, không cần kết nối lại. Có thể tạm dừng rồi tiếp tục.',
  '现有独立密钥仍然兼容。你可以稍后处理，准备好后从首页的“设置与迁移”继续。':
    'Khóa riêng hiện tại vẫn dùng được. Có thể làm sau, rồi quay lại qua “Thiết lập và chuyển” trên trang hộp thư.',
  '稍后处理': 'Để sau',
  '请稍候…': 'Vui lòng đợi…',
  '邮箱加密密钥可以统一管理': 'Có thể dùng một khóa cho mọi nhà cung cấp thư',
  '设置与迁移': 'Thiết lập và chuyển',
  '统一邮箱加密密钥': 'Khóa mã hóa thư dùng chung',
  '仅主管理员可见，原有独立密钥配置仍可继续使用。':
    'Chỉ chủ quản trị thấy. Khóa riêng của từng nhà cung cấp vẫn dùng được.',
  '迁移步骤': 'Các bước chuyển',
  '1. 配置全局密钥': '1. Cấu hình khóa dùng chung',
  '2. 迁移已有凭据': '2. Chuyển thông tin đã lưu',
  '3. 确认完成': '3. Xác nhận xong',
  '在 Cloudflare 中打开当前 Worker → Settings → Variables and Secrets，新增 Secret：':
    'Trong Cloudflare, mở Worker → Settings → Variables and Secrets rồi thêm Secret:',
  '使用至少 32 字节的随机密钥，保存并部署后，回到此处检查配置。已有密钥请先保留。':
    'Dùng khóa ngẫu nhiên ít nhất 32 byte. Lưu, triển khai, rồi quay lại đây kiểm tra. Tạm thời giữ các khóa cũ.',
  '已检测到全局密钥，但长度不足，请检查配置。':
    'Đã thấy khóa dùng chung nhưng quá ngắn. Hãy kiểm tra cấu hình.',
  '打开 Cloudflare': 'Mở Cloudflare',
  '全局密钥已就绪': 'Khóa dùng chung đã sẵn sàng',
  '当前凭据已全部使用全局密钥。': 'Mọi thông tin đăng nhập hiện dùng khóa chung.',
  '点击开始后逐批迁移，邮箱可继续使用，无需重新绑定账号。':
    'Bấm bắt đầu để chuyển theo từng đợt. Thư vẫn dùng được, không cần kết nối lại tài khoản.',
  '已统一 {migrated} / {total} 项凭据': 'Đã chuyển {migrated} / {total} mục',
  '迁移中，请保持此页面打开。': 'Đang chuyển. Hãy giữ trang này mở.',
  '迁移完成': 'Đã chuyển xong',
  '迁移仅在你点击开始后运行。': 'Việc chuyển chỉ chạy sau khi bạn bấm Bắt đầu.',
  '{count} 项待迁移': 'Còn {count} mục',
  '请确认旧密钥仍然可用': 'Hãy kiểm tra khóa cũ vẫn còn',
  '仍有凭据未迁移。请检查对应旧密钥是否保留；修复后可继续迁移，原数据未被覆盖。':
    'Còn thông tin chưa chuyển được. Kiểm tra khóa cũ còn giữ không; sửa xong rồi chuyển tiếp. Dữ liệu gốc không bị ghi đè.',
  '已暂停。当前批次已结束，可随时继续。':
    'Đã tạm dừng. Đợt hiện tại đã xong. Có thể tiếp tục lúc nào cũng được.',
  '正在结束当前批次…': 'Đang kết thúc đợt hiện tại…',
  '暂停迁移': 'Tạm dừng chuyển',
  '暂不迁移': 'Chưa chuyển',
  '重新检查配置': 'Kiểm tra cấu hình lại',
  '开始 / 继续迁移': 'Bắt đầu / tiếp tục chuyển',
  '确认全部运行实例均已升级后，可删除旧 Secret。历史备份仍需对应旧密钥，请离线妥善保留。':
    'Khi mọi bản đang chạy đã nâng cấp, có thể xóa Secret cũ. Bản sao lưu cũ vẫn cần khóa cũ; hãy giữ khóa đó ở nơi an toàn, ngoài hệ thống.',
  '关闭或暂停后，当前批次可能完成，但不会继续下一批。已完成的迁移会保留；下次从剩余凭据继续。':
    'Đóng hoặc tạm dừng thì đợt hiện tại có thể chạy nốt, nhưng không sang đợt sau. Phần đã chuyển được giữ; lần sau tiếp tục phần còn lại.',
  '开始使用全局密钥后请勿随意更换或删除它，也不要回滚到不支持此格式的旧版本。':
    'Sau khi dùng khóa chung, đừng đổi hoặc xóa khóa, và đừng quay về bản cũ không đọc được định dạng này.',
  '只有网页登录的主管理员可以管理邮箱密钥迁移。':
    'Chỉ chủ quản trị đăng nhập trên web mới quản lý được việc chuyển khóa thư.',
  '无法读取邮箱密钥迁移状态。': 'Không đọc được trạng thái chuyển khóa thư.',
  '迁移参数无效。': 'Tham số chuyển không hợp lệ.',
  '全局密钥未就绪或已变化，请重新检查配置。':
    'Khóa dùng chung chưa sẵn sàng hoặc đã đổi. Hãy kiểm tra cấu hình lại.',
  '本批迁移未完成，已处理的数据会保留，请重新检查后继续。':
    'Đợt này chưa xong. Phần đã xử lý được giữ. Kiểm tra rồi tiếp tục.',
  '在 Worker Variables & Secrets 中配置至少 32 字节的 MAIL_CREDENTIALS_KEY，然后重新部署。':
    'Cấu hình Secret MAIL_CREDENTIALS_KEY ít nhất 32 byte trong Worker Variables & Secrets, rồi triển khai lại.',
  '配置至少 32 字节的 MAIL_CREDENTIALS_KEY，并启用 MICROSOFT_MAIL_ENABLED 后重新部署。':
    'Cấu hình MAIL_CREDENTIALS_KEY ít nhất 32 byte, bật MICROSOFT_MAIL_ENABLED, rồi triển khai lại.',
}
