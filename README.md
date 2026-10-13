<!--
SPDX-FileCopyrightText: 2026 OpenDXOS contributors
SPDX-License-Identifier: Apache-2.0
-->

<h1 align="center">OpenDXOS</h1>

<p align="center">
  Hệ Điều Hành Chuyển Đổi Số Nguồn Mở (DX-OS Open-Core) Hợp Nhất Nền Tảng Thương Mại Số, Lõi Quản Trị Doanh Nghiệp Tập Trung và Hệ Sinh Thái Đa Tác Tử (Multi-Agent Team)
</p>

<p align="center">
  <a href="http://localhost:3000" rel="dofollow" target="_blank"><strong>Bàn Làm Việc Quản Trị (Console) »</strong></a>
  &nbsp;|&nbsp;
  <a href="http://localhost:3100" rel="dofollow" target="_blank"><strong>Cửa Hàng Thương Mại (Storefront) »</strong></a>
  <br/>
  <br/>
  <a href="./docs/build-from-source.md">🚀 Hướng Dẫn Cài Đặt</a>
  &nbsp;|&nbsp;
  <a href="./docs/thuyet-minh-san-pham.md">📄 Thuyết Minh Dự Án (OLP 2026)</a>
  &nbsp;|&nbsp;
  <a href="./docs/project-structure.md">📦 Cấu Trúc Monorepo</a>
  &nbsp;|&nbsp;
  <a href="./docs/dependencies.md">⚖️ Minh Bạch Giấy Phép (PoF)</a>
</p>

<p align="center">
  <a href="https://vfossa.vn/tin-tuc/de-thi-phan-mem-nguon-mo-olp-2026-798.html" target="_blank">
    <img loading="lazy" src="https://img.shields.io/badge/OLP--2026-VFOSSA-orange.svg" alt="OLP 2026 VFOSSA"/>
  </a>
  <a href="https://vfossa.vn/tin-tuc/the-le-olp-phan-mem-nguon-mo-nam-2026-760.html" target="_blank">
    <img loading="lazy" src="https://img.shields.io/badge/PoF-50%2F50_Compliant-success.svg" alt="Proof of Freedom 50/50"/>
  </a>
  <a href="./LICENSE" target="_blank">
    <img loading="lazy" src="https://img.shields.io/badge/License-Apache_2.0-blue.svg" alt="OpenDXOS license"/>
  </a>
  <a href="https://www.keycloak.org/" target="_blank">
    <img loading="lazy" src="https://img.shields.io/badge/Keycloak-24.0-008080?logo=keycloak&logoColor=white" alt="Keycloak"/>
  </a>
  <a href="https://www.postgresql.org/" target="_blank">
    <img loading="lazy" src="https://img.shields.io/badge/PostgreSQL-16-4169E1?logo=postgresql&logoColor=white" alt="PostgreSQL"/>
  </a>
  <a href="https://fastapi.tiangolo.com/" target="_blank">
    <img loading="lazy" src="https://img.shields.io/badge/FastAPI-0.110-009688?logo=fastapi&logoColor=white" alt="FastAPI"/>
  </a>
</p>

---

## ✨ Điểm Nổi Bật (Highlights)

- 🏛️ **Kiến Trúc 3 Tầng Chuẩn DX-OS Open-Core (VFOSSA OLP 2026)**:
  * **Tầng 1 (Headless PaaS Open-Core)**: Nền tảng phân quyền tập trung Keycloak SSO/RBAC, PostgreSQL 16 ACID Store, Redis 7, MinIO S3 Storage.
  * **Tầng 2 (Bộ Năng Lực Số Chuẩn Hóa HPDI)**: Số hóa 4 trụ cột Con người (Human), Quy trình (Process), Dữ liệu (Data), Trí tuệ (Intelligence). Sẵn sàng cho **Multi-Agent Team** chuyên nghiệp.
  * **Tầng 3 (Ứng Dụng Nghiệp Vụ Cắm-Rút)**: Bàn làm việc quản trị doanh nghiệp (Console), Cửa hàng thương mại điện tử (Storefront), CRM Khách hàng 360, và Cổng thanh toán tự động SePay.
- 🛒 **Nền Tảng Thương Mại Số Vững Chắc (Battle-Tested Commerce Engine)**:
  * Quản lý sản phẩm đa biến thể (Catalog), tồn kho đa trạng thái (Inventory), giỏ hàng độc lập (Cart), kiểm soát đơn hàng bất biến (Immutable Order).
  * Tích hợp thanh toán SePay VietQR tự động xác thực thời gian thực qua Webhook/IPN.
  * Toàn bộ logic nghiệp vụ được bảo vệ chặt chẽ tại Backend (**Backend Authoritative Truth**), loại bỏ gian lận từ phía client.
- 🛡️ **Kiểm Soát Rủi Ro Bằng Con Người (Human-in-the-Loop)**:
  * Các hành động nhạy cảm (tài chính, phát hành nội dung ra ngoài, thay đổi cấu trúc dữ liệu) bắt buộc phải qua cổng phê duyệt (**Approval Inbox**) trước khi thực thi.
  * Nhật ký kiểm toán bất biến (Audit Trail) ghi vết đầy đủ danh tính người duyệt và lý do.
- ⚡ **Khởi Dựng Nhanh Bằng 1 Lệnh (One-Command Setup)**: Tự động hóa hoàn toàn với `make up` và Docker Compose, kèm theo bộ kiểm thử toàn diện (`pnpm check`).
- ⚖️ **Tuân Thủ Tuyệt Đối Tiêu Chí Proof of Freedom (PoF 50/50 Điểm)**:
  * Kho mã nguồn 100% tuân thủ bản quyền Apache-2.0 và quy chuẩn SPDX.
  * **No-Vendoring Policy**: Không sao chép mã nguồn bên ngoài vào kho code. Dịch vụ tự động hóa vệ tinh (như n8n) chạy độc lập qua container ngoài theo đúng chỉ đạo của Ban Giám khảo.

---

## 📋 Cấu Trúc Monorepo

```text
OpenDXOS/
├── apps/                         # Các ứng dụng giao diện và API trung tâm
│   ├── api/                      # Core Business API (Clean Architecture, Express/TS)
│   ├── console/                  # Management & Digital Workforce Console (Vite + React)
│   └── storefront/               # Customer Commerce Storefront (Vite + React)
├── services/                     # Dịch vụ nền tảng độc lập
│   └── ai-runtime/               # Multi-Agent Engine & Worker (FastAPI/Python)
├── packages/                     # Thư viện dùng chung nội bộ (Monorepo Workspaces)
│   ├── config/                   # Quản lý cấu hình & biến môi trường
│   ├── domain/                   # Định nghĩa Entities, Contracts & Value Objects
│   └── ui/                       # Design tokens & UI components tái sử dụng
├── infra/                        # Hạ tầng container hóa & cơ sở dữ liệu
│   ├── docker/                   # Docker Compose, DB seeds, PostgreSQL & Redis
│   └── keycloak/                 # Cấu hình realm và bảo mật phân quyền RBAC
├── docs/                         # Toàn bộ tài liệu chính thức nộp thi OLP 2026
├── scripts/                      # Bộ kịch bản kiểm thử, kiểm toán (audit) & vận hành
├── AGENTS.md                     # Điều lệ & quy tắc kiến trúc cho AI coding agent
├── CHANGELOG.md                  # Nhật ký thay đổi phiên bản (SemVer)
├── CONTRIBUTING.md               # Hướng dẫn đóng góp, Conventional Commits & Git-Flow
├── LICENSE                       # Toàn văn Apache License 2.0 chuẩn OSI
├── Makefile                      # Bộ lệnh tự động hóa phát triển toàn diện
├── NOTICE                        # Ghi nhận bản quyền theo chuẩn Apache
├── package.json                  # Cấu hình pnpm workspaces cho toàn bộ monorepo
├── pnpm-workspace.yaml           # Khai báo apps/* và packages/*
└── README.md                     # Trang chủ dự án
```

---

## 🚀 Hướng Dẫn Khởi Chạy Nhanh

### Yêu Cầu Tối Thiểu
* **Node.js**: `>= 22.x` & `corepack` (pnpm)
* **Python**: `>= 3.11`
* **Docker & Docker Compose**: `docker >= 24.0`
* **GNU Make**

### Khởi Chạy Bằng 1 Lệnh
```bash
# 1. Clone kho mã nguồn
git clone https://github.com/gagaduy/OpenDXOS.git
cd OpenDXOS
git checkout develop

# 2. Khởi chạy toàn bộ hạ tầng (Postgres, Keycloak, MinIO, API, Console, Storefront)
make up
```

Sau khi hoàn tất, các dịch vụ sẵn sàng tại:
* **Bàn làm việc Quản trị (Console):** `http://localhost:3000`
* **Cửa hàng Khách hàng (Storefront):** `http://localhost:3100`
* **Hệ thống Quản lý Định danh Keycloak:** `http://localhost:8080`
* **Cổng lưu trữ S3 MinIO:** `http://localhost:9001`

### Chạy Bộ Kiểm Thử Độc Lập
```bash
pnpm check        # Kiểm tra toàn bộ mã nguồn TypeScript và test integration
make check        # Kiểm tra toàn diện trên container tái lập
```

---

## 📖 Hệ Thống Tài Liệu Kèm Theo

| Tài Liệu | Mô Tả & Mục Đích |
| :--- | :--- |
| [Thuyết Minh Dự Án](./docs/thuyet-minh-san-pham.md) | Thuyết minh 4 bài toán thực tế, giải pháp kỹ thuật và tính mở OLP 2026 |
| [Cấu Trúc Monorepo](./docs/project-structure.md) | Bố cục chi tiết các ứng dụng, packages, infra và luồng phát triển Git |
| [Hướng Dẫn Build Từ Mã Nguồn](./docs/build-from-source.md) | Quy trình biên dịch và kiểm thử từ source code (PoF Tiêu chí 4) |
| [Minh Bạch Phụ Thuộc & Giấy Phép](./docs/dependencies.md) | Bảng kê khai thư viện, giấy phép và giải trình ranh giới n8n (PoF Tiêu chí 5) |
| [Kiến Trúc Sạch (Clean Architecture)](./docs/architecture/clean-architecture.md) | Nguyên tắc phân lớp Domain, Application, Infrastructure và Presentation |
| [Quy Tắc Phụ Thuộc](./docs/architecture/dependency-rules.md) | Ranh giới nhập khẩu mã nguồn và kiểm soát chiều phụ thuộc |
| [Tích Hợp Thanh Toán SePay](./docs/integrations/sepay.md) | Hướng dẫn cấu hình cổng thanh toán VietQR / SePay Sandbox |
| [Tích Hợp Meta Marketing](./docs/integrations/meta-marketing.md) | Xuất bản tự động lên Facebook Fanpage & Instagram có người duyệt |
| [Quy Chuẩn Đóng Góp](./CONTRIBUTING.md) | Hướng dẫn tham gia phát triển, quy tắc commit và gửi Pull Request |

---

## 📄 Bản Quyền & Giấy Phép

Dự án được phát hành theo giấy phép **Apache License 2.0** — xem chi tiết tại tệp [LICENSE](LICENSE).

```text
SPDX-FileCopyrightText: 2026 OpenDXOS contributors
SPDX-License-Identifier: Apache-2.0
```

---

<div align="center">

**OpenDXOS v0.1.0** — Hệ Điều Hành Chuyển Đổi Số Nguồn Mở  
*Olympic Tin học Sinh viên Việt Nam (OLP) 2026 — Khối Phần mềm Nguồn mở (VFOSSA)*

[🏠 Kho Mã Nguồn](https://github.com/gagaduy/OpenDXOS) • [📚 Tài Liệu](./docs/) • [🐛 Báo Lỗi](../../issues) • [✨ Đề Xuất](../../issues)

</div>
