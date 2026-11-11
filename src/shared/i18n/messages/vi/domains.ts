export const viDomains: Record<string, string> = {
  '提交域名邮箱清理': 'Đã lên lịch dọn hộp thư của tên miền',
  '重试域名邮箱清理': 'Đã thử lại việc dọn hộp thư của tên miền',
  '域名邮箱清理完成': 'Đã dọn xong hộp thư của tên miền',
  '{domain} 的关联邮箱': 'Hộp thư của {domain}',
  '关联邮箱': 'Hộp thư liên kết',
  '查看关联邮箱': 'Xem hộp thư',
  '所属用户': 'Người sở hữu',
  '下一页': 'Trang sau',
  '返回第一页': 'Về trang đầu',
  '主邮箱 · 请所属用户先迁移': 'Hộp thư chính · người sở hữu phải chuyển trước',
  '共 {total} 个，主邮箱 {primary} 个，清理中 {cleaning} 个': '{total} hộp thư, {primary} hộp thư chính, {cleaning} đang dọn',
  '选择当前页可清理邮箱': 'Chọn hộp thư có thể dọn trên trang này',
  '选择邮箱：{address}': 'Chọn hộp thư: {address}',
  '永久清理': 'Dọn vĩnh viễn',
  '永久清理会删除目标邮箱的邮件、草稿和附件。主邮箱必须先迁移；备份按保留策略保存。':
    'Dọn vĩnh viễn sẽ xóa thư, thư nháp và tệp đính kèm. Hộp thư chính phải được chuyển trước; bản sao lưu theo chính sách giữ lại.',
  '没有关联邮箱。': 'Không có hộp thư liên kết.',
  '清理选中邮箱（{count}）': 'Dọn hộp thư đã chọn ({count})',
  '清理全部关联邮箱并移除配置': 'Dọn mọi hộp thư liên kết và gỡ cấu hình',
  '确认清理 {domain}？': 'Dọn {domain}?',
  '输入域名 {domain} 确认': 'Nhập {domain} để xác nhận',
  '涉及 {users} 位用户、{mailboxes} 个邮箱、{messages} 封邮件、{drafts} 份草稿和 {attachments} 个附件。':
    'Ảnh hưởng {users} người dùng, {mailboxes} hộp thư, {messages} thư, {drafts} thư nháp và {attachments} tệp đính kèm.',
  '预计释放 {bytes} 字节；保留 {count} 封无人收件历史邮件。':
    'Dự kiến giải phóng {bytes} byte. Giữ lại {count} thư cũ chưa gán người nhận.',
  '全部目标清理完成后移除域名配置。无人收件历史邮件保留；备份按原保留策略保存。':
    'Gỡ cấu hình tên miền sau khi dọn xong mọi mục tiêu. Thư cũ chưa gán người nhận và bản sao lưu được giữ theo chính sách.',
  '仅清理选中邮箱；其他邮箱和无人收件历史数据保留。备份按原保留策略保存。':
    'Chỉ dọn hộp thư đã chọn. Hộp thư khác, lịch sử chưa gán và bản sao lưu được giữ lại.',
  '提交清理任务': 'Gửi yêu cầu dọn',
  '等待后台清理': 'Đang chờ dọn ở nền',
  '正在清理': 'Đang dọn',
  '等待附件和对象清理': 'Đang chờ dọn tệp đính kèm và đối tượng',
  '清理未完成': 'Chưa dọn xong',
  '清理完成': 'Đã dọn xong',
  '已清理 {completed} / {total} 个邮箱，待清理对象 {objects} 个':
    'Đã dọn {completed} / {total} hộp thư; còn {objects} đối tượng',
  '重试清理任务': 'Thử dọn lại',
  '域名不可用 · 历史可读': 'Tên miền không dùng được · lịch sử vẫn đọc được',
  '移除配置': 'Gỡ cấu hình',
  '移除域名配置': 'Gỡ cấu hình tên miền',
  '移除 {domain} 的配置？': 'Gỡ cấu hình của {domain}?',
  '管理域名收发、关联邮箱和历史数据': 'Quản lý thư đến/đi, hộp thư liên kết và lịch sử',
  '保留历史数据': 'Giữ dữ liệu cũ',
  '保留 {count} 个邮箱及其历史邮件、草稿和附件；停止该域名的新收发与邮箱创建，相关邀请失效。Cloudflare DNS 和 Email Routing 需单独管理。':
    'Giữ {count} hộp thư cùng thư, thư nháp và tệp đính kèm. Ngừng nhận/gửi thư mới và tạo hộp thư; lời mời liên quan hết hiệu lực. DNS và Email Routing trên Cloudflare phải quản lý riêng.',
  '重新添加同名域名后，仍启用的邮箱可以恢复使用。':
    'Thêm lại đúng tên miền này có thể mở lại các hộp thư đang bật được giữ lại.',
  '重新添加同名域名后，仍启用的保留邮箱可以恢复收发。':
    'Thêm lại đúng tên miền này có thể nhận/gửi thư lại trên các hộp thư đang bật được giữ lại.',
  '域名已停用，新收发和邮箱创建已停止。':
    'Đã tắt tên miền. Không nhận/gửi thư mới và không tạo hộp thư nữa.',
  '加载关联邮箱失败。': 'Không tải được hộp thư liên kết.',
  '加载清理进度失败。': 'Không tải được tiến độ dọn.',
  '重试清理失败。': 'Không thử dọn lại được.',
  '清理预览失败。': 'Không xem trước được việc dọn.',
  '清理任务提交失败。': 'Không gửi được yêu cầu dọn.',
  '清理未完成，请重试；已完成的数据不会恢复。':
    'Chưa dọn xong. Hãy thử lại; dữ liệu đã xóa không khôi phục được.',
  '只有管理员可以查看关联邮箱。': 'Chỉ quản trị viên mới xem được hộp thư liên kết.',
  '域名或分页参数无效。': 'Tên miền hoặc tham số phân trang không hợp lệ.',
  '只有主管理员可以批量清理关联邮箱。':
    'Chỉ chủ quản trị mới dọn hàng loạt hộp thư liên kết.',
  '清理参数无效。': 'Tham số dọn không hợp lệ.',
  '请选择 1 至 100 个有效邮箱。': 'Hãy chọn từ 1 đến 100 hộp thư hợp lệ.',
  '所选邮箱必须属于当前域名。': 'Hộp thư đã chọn phải thuộc tên miền này.',
  '该域名正在清理，请等待任务完成。': 'Tên miền này đang được dọn. Hãy đợi xong.',
  '目标中包含主邮箱、正在清理或不存在的邮箱，请先处理后重新预览。':
    'Có hộp thư chính, hộp thư đang dọn hoặc hộp thư không tồn tại. Xử lý rồi xem trước lại.',
  '请输入完整域名确认清理。': 'Nhập đủ tên miền để xác nhận dọn.',
  '清理预览不存在。': 'Bản xem trước việc dọn không còn.',
  '邮箱数据或清理状态已变化，请重新预览。':
    'Dữ liệu hộp thư hoặc trạng thái dọn đã đổi. Hãy xem trước lại.',
  '只有主管理员可以查看清理任务。': 'Chỉ chủ quản trị mới xem được yêu cầu dọn.',
  '任务编号无效。': 'Mã yêu cầu không hợp lệ.',
  '清理任务不存在。': 'Yêu cầu dọn không còn.',
  '只有主管理员可以重试清理任务。': 'Chỉ chủ quản trị mới thử dọn lại được.',
  '任务已保存，后台派发暂时失败，请稍后重试。':
    'Đã lưu yêu cầu nhưng chưa gửi được cho tiến trình nền. Hãy thử lại sau.',
  '域名删除模式无效。': 'Cách xóa tên miền không hợp lệ.',
  '域名或关联邮箱已变化，请刷新后重试。':
    'Tên miền hoặc hộp thư liên kết đã đổi. Tải lại rồi thử lại.',
}
