<!--
SPDX-FileCopyrightText: 2026 OpenDXOS contributors
SPDX-License-Identifier: Apache-2.0
-->

# BẢN THUYẾT MINH DỰ ÁN: OPENDXOS
### Hệ Điều Hành Chuyển Đổi Số Nguồn Mở (DX-OS Open-Core)
> **Hạng mục:** Olympic Tin học Sinh viên Việt Nam (OLP) 2026 — Khối Phần mềm Nguồn mở (VFOSSA)  
> **Đề thi:** *"Xây dựng Hệ điều hành Chuyển đổi số bằng Công nghệ Lõi nguồn mở - DX-OS Open-Core"*

---

## 1. GIỚI THIỆU TỔNG QUAN

* **Tên hệ thống:** OpenDXOS
* **Mô hình hoạt động:** Hệ điều hành chuyển đổi số mở (DX-OS Open-Core) hợp nhất giữa **Nền tảng Thương mại số vững chắc (Commerce Engine)**, **Kiến trúc Quản trị Doanh nghiệp tập trung (Operating Core)**, và **Hệ sinh thái Đa tác tử thông minh (Multi-Agent Team)**.
* **Mục tiêu dự án:** Cung cấp nền tảng số hóa toàn diện cho doanh nghiệp từ lõi hạ tầng đến ứng dụng nghiệp vụ, loại bỏ các giải pháp rời rạc và hiện tượng khóa chặt nhà cung cấp (vendor lock-in). Hệ thống đưa AI vào khuôn khổ vận hành thực tế có tổ chức, có phân quyền chặt chẽ và kiểm soát rủi ro bằng con người (Human-in-the-Loop).
* **Nền tảng kỹ thuật:**
  * Tầng 1 (PaaS Open-Core): Keycloak IAM/RBAC, PostgreSQL 16 ACID Store, Redis 7, MinIO S3 Object Storage.
  * Tầng 2 (HPDI Capabilities): Chuẩn hóa Con người (Human), Quy trình (Process), Dữ liệu (Data) và Trí tuệ (Intelligence). Sẵn sàng cho Multi-Agent Team.
  * Tầng 3 (Business Applications): Console điều hành tác nghiệp (React/TypeScript), Cửa hàng thương mại điện tử (Storefront), Cổng thanh toán SePay/VietQR tự động.
* **Bản quyền:** Mã nguồn mở chuẩn Apache-2.0, đáp ứng trọn vẹn 50/50 điểm Proof of Freedom (PoF) OLP 2026.

---

## 2. BỐN BÀI TOÁN THỰC TẾ & GIẢI PHÁP KỸ THUẬT

---

### BÀI TOÁN 1: AI trong doanh nghiệp phần lớn chỉ là các chatbot độc lập, không có khả năng phân rã mục tiêu chiến lược và không thể phối hợp liên phòng ban.

* **Vấn đề thực tế:** 
  Hầu hết các giải pháp hiện nay chỉ dừng lại ở việc cung cấp một ô chat để nhân viên đặt câu hỏi. Khi Ban Giám đốc đưa ra một mục tiêu kinh doanh cấp cao (ví dụ: *"Tăng cường chăm sóc tệp khách hàng VIP phát sinh sự cố trong tuần"* hoặc *"Chuẩn bị chiến dịch quảng bá dòng sản phẩm mới"*), con người vẫn phải tự bóc tách việc thành từng phần nhỏ rồi copy-paste thủ công sang từng công cụ riêng lẻ. Các phòng ban (Marketing, Kho, CSKH, Tài chính) hoạt động rời rạc, gây chậm trễ và đứt gãy mạch thông tin.

* **Giải pháp trong OpenDXOS:**
  * **Hệ thống Multi-Agent Team Chuyên Nghiệp:** Tiếp cận theo hướng một đội ngũ tác tử AI cộng tác đa vai trò thay vì một chatbot tổng quát hay workflow cố định.
  * **AI Coordinator Routing:** Tác tử điều phối trung tâm tiếp nhận mục tiêu cấp cao, tự động phân tích bối cảnh, phân rã công việc (Dynamic Goal Decomposition) và phân công chính xác đến các Agent chuyên trách của từng phòng ban.
  * **Phân quyền độc lập theo nguyên tắc Least Privilege (Keycloak RBAC):** Mỗi Agent được cấp định danh độc lập (Service Account), chỉ được phép truy cập tài nguyên dữ liệu và công cụ (Tools) thuộc phạm vi nhiệm vụ của mình.

---

### BÀI TOÁN 2: Tự động hóa nghiệp vụ truyền thống thường bị code cứng hoặc dựa vào các công cụ kéo-thả thiếu chiều sâu và dễ đứt gãy.

* **Vấn đề thực tế:** 
  Logic nghiệp vụ cài cắm cứng vào backend khiến hệ thống khó thích ứng khi chính sách thay đổi. Ngược lại, các công cụ tự động hóa kéo-thả kịch bản đơn giản (iPaaS canvas) thường thiếu chiều sâu suy luận, không xử lý được các tình huống ngoại lệ phức tạp, và thiếu cơ chế duy trì trạng thái bền bỉ khi gặp sự cố mạng hoặc thời gian chờ xử lý kéo dài.

* **Giải pháp trong OpenDXOS:**
  * **Cơ chế Thực Thi Tác Tử Động (Dynamic Agentic Execution):** Các tác tử trong Multi-Agent Team tự suy luận theo ngữ cảnh thực tế, chủ động gọi các công cụ (Tool Calling) phù hợp qua API chuẩn mở để giải quyết bài toán nghiệp vụ thay vì chạy theo các bước kịch bản cứng nhắc.
  * **Duy trì trạng thái tác nghiệp bền bỉ:** Tiến trình công việc được lưu vết trạng thái vào cơ sở dữ liệu cốt lõi, bảo đảm khả năng phục hồi chính xác ngay cả khi máy chủ khởi động lại hoặc tác vụ chờ phê duyệt kéo dài nhiều ngày.
  * **Tách biệt dịch vụ vệ tinh (n8n):** Các dịch vụ tự động hóa ngoài (n8n) được cô lập thành container độc lập ngoài kho code theo đúng hướng dẫn của Ban Giám khảo VFOSSA, giữ cho kho mã nguồn trong sạch tuyệt đối về mặt bản quyền.

---

### BÀI TOÁN 3: Doanh nghiệp e ngại rủi ro khi AI tự ý ra quyết định gây thiệt hại tài chính hoặc sai lệch phát ngôn.

* **Vấn đề thực tế:** 
  Ảo giác (Hallucination) và việc thiếu cơ chế rào chắn an toàn là rào cản lớn nhất ngăn doanh nghiệp áp dụng AI vào vận hành thực tế. Nếu trao quyền tự động hoàn toàn cho AI, doanh nghiệp có nguy cơ đối mặt với việc AI tự ý cấp phát ngân sách sai, cấp mã voucher vượt hạn mức cho phép, hoặc đăng tải các thông điệp truyền thông chưa được kiểm chứng lên mạng xã hội.

* **Giải pháp trong OpenDXOS:**
  * **Mô hình Cổng Phê Duyệt Rủi Ro (Human-in-the-Loop):** Thiết lập ranh giới an toàn nghiêm ngặt. AI chỉ đóng vai trò phân tích dữ liệu, tổng hợp tình huống và đề xuất phương án tối ưu. Đối với các hành động vượt ngưỡng rủi ro (chi tiêu tài chính, bồi thường khiếu nại, phát hành nội dung ra công chúng), hệ thống bắt buộc dừng lại tại Cổng kiểm soát (Approval Gate) để con người phê duyệt.
  * **Approval Inbox tập trung:** Giao diện trực quan cho người quản trị kiểm tra đầy đủ ngữ cảnh: Nguyên nhân phát sinh, mức độ thiệt hại, căn cứ AI đề xuất giải pháp, và nội dung dự thảo. Người duyệt có toàn quyền chấp thuận, từ chối hoặc chỉnh sửa trực tiếp.
  * **Thông báo tức thời qua Email & Nhật ký kiểm toán (Audit Trail) bất biến:** Gửi thông báo đến người phụ trách kèm liên kết xử lý nhanh; mọi quyết định đều được lưu vết phục vụ hậu kiểm.

---

### BÀI TOÁN 4: Dữ liệu vận hành bị phân mảnh và chi phí tiêu thụ tài nguyên AI là một "hộp đen" khó đo lường.

* **Vấn đề thực tế:** 
  1. Dữ liệu giữa các khâu bán hàng, tồn kho, thanh toán và chăm sóc khách hàng nằm ở các hệ thống riêng lẻ, khiến người quản trị không nắm được bức tranh tổng thể về sức khỏe doanh nghiệp.
  2. Chi phí tiêu thụ token từ các mô hình AI (LLM) phát sinh khó kiểm soát. Doanh nghiệp thiếu công cụ đo lường mức độ tiêu thụ tài nguyên theo thời gian thực để tính toán hiệu quả đầu tư (ROI).

* **Giải pháp trong OpenDXOS:**
  * **Chân lý Dữ liệu từ Backend (Backend Authoritative Truth):** Tuân thủ Clean Architecture nghiêm ngặt. Toàn bộ logic về giá bán, tồn kho, khuyến mãi, trạng thái đơn hàng và xác thực thanh toán SePay đều được tính toán và bảo vệ tại backend. Phía giao diện chỉ phản ánh dữ liệu từ backend, loại bỏ hoàn toàn rủi ro thao túng từ client.
  * **Hồ sơ Khách hàng Hợp nhất (Customer 360 CRM):** Đồng bộ danh tính khách hàng với toàn bộ lịch sử giao dịch, tương tác hỗ trợ và giá trị đóng góp vòng đời (LTV).
  * **Minh bạch Tài nguyên AI (Token & Cost Observability):** Tự động ghi nhận số lượng input token, output token, mã định danh mô hình và chi phí vi mô của từng lần gọi AI. Quy đổi trực tiếp lượng tiêu thụ ra tiền tệ (VNĐ và USD) trên Dashboard thời gian thực.

---

## 3. CHẤT LƯỢNG KỸ THUẬT & TÍNH SẴN SÀNG NGUỒN MỞ (OLP 2026)

1. **Kiến trúc phân tầng chuẩn mực (Clean Architecture):** Tách biệt rành mạch giữa Domain, Application, Infrastructure và Presentation. Nền tảng thương mại và quản trị đã được hoàn thiện đầy đủ, vượt qua toàn bộ các bài kiểm tra tích hợp tự động.
2. **Khởi chạy từ mã nguồn thuần túy:** Toàn bộ hệ thống có thể khởi dựng hoàn chỉnh bằng 1 lệnh duy nhất (`make up` hoặc `make check`), không phụ thuộc vào bất kỳ gói nhị phân đóng kín nào.
3. **Bản quyền & Chuẩn mở:** Giấy phép Apache-2.0 chuẩn OSI, 100% tệp tin có tiêu đề SPDX, không vendoring mã nguồn bên ngoài, kê khai minh bạch phụ thuộc tại `docs/dependencies.md`.
