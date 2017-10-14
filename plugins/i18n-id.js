export default {
  main: {
    navTitle: 'The<strong>Skeleton</strong>',
    title: 'TheSkeleton',
    route: {
      'index': 'Dasbor',
      'admin': 'Admin',
      'admin-users': 'Pengguna',
      'admin-users-id': 'Tambah / Perbarui Pengguna',
      'admin-users-id-roles': 'Tugaskan peran kepada pengguna'
    }
  },
  common: {
    action: 'Aksi',
    add: 'Tambah',
    addNew: 'Tambah {0} baru',
    addOrModify: 'Tambah atau modifikasi {0}',
    delete: 'Hapus {0}',
    deleteConfirm: 'Konfirmasi Penghapusan',
    deleteConfirmation: 'Apakah anda yakin ingin menghapus {0}?',
    deleteSuccess: '{0} telah dihapus',
    lock: 'Kunci {0} ({1})',
    modify: 'Modifikasi {0} ({1})',
    save: 'Simpan',
    unlock: 'Buka {0} ({1})',
    update: 'Perbarui {0}',
    updateSuccess: '{0} telah diperbarui',
    view: 'Lihat {0}'
  },
  admin: {
    base: {
      title: 'Admin'
    },
    role: {
      title: 'Peran',
      subtitleAssignPrivilege: 'Tugaskan hak khusus kepada peran',
      label: 'peran',
      labelCode: 'Kode',
      labelDescription: 'Deskripsi',
      labelPrivileges: 'Hak Khusus'
    },
    user: {
      title: 'Pengguna',
      subtitleAssignRole: 'Tugaskan peran kepada pengguna',
      label: 'pengguna',
      labelEmail: 'Surel',
      labelRoles: 'Peran',
      labelUnlocked: 'Terbuka',
      labelUsername: 'Nama Pengguna'
    }
  },
  profile: {
    basic: {
      title: 'Dasar',
      subtitle: 'Perbarui profil dasar anda',
      labelEmail: 'Surel',
      labelUsername: 'Nama Pengguna',
      messageChangeUsername: 'Jika anda mengubah nama pengguna, anda perlu masuk kembali'
    },
    password: {
      title: 'Kata Sandi',
      subtitle: 'Perbarui kata sandi anda',
      labelPasswordConfirm: 'Konfirmasi kata sandi',
      labelPasswordNew: 'Kata sandi baru',
      labelPasswordOld: 'Kata sandi lama',
      messagePasswordUpdated: 'Kata sandi telah diperbarui'
    },
    picture: {
      title: 'Foto',
      subtitle: 'Unggah foto profil anda',
      labelUpload: 'Unggah foto profil'
    }
  }
}
