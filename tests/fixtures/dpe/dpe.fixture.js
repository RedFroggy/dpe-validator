export class DpeDataFixture {
  /**
   * @return {Partial<FullDpe>}
   */
  static aFullDpe() {
    return {
      numero_dpe: '2344E0308327N',
      statut: 'ACTIF',
      administratif: {
        dpe_a_remplacer: '2344E0308141J',
        motif_remplacement: 'Modification à apporter',
        dpe_immeuble_associe: '',
        enum_version_id: '2.2',
        date_visite_diagnostiqueur: '2023-01-31',
        date_etablissement_dpe: '2023-01-31',
        enum_modele_dpe_id: '1',
        diagnostiqueur: {
          usr_logiciel_id: 26615,
          version_logiciel: 'LICIEL Diagnostics v4 [Version XML:214]',
          version_moteur_calcul: '3cl_tribu_1.4.25.1'
        },
        geolocalisation: {
          invar_logement: '',
          rpls_log_id: '',
          rpls_org_id: '',
          idpar: '',
          immatriculation_copropriete: '',
          adresses: {
            adresse_bien: {
              adresse_brut: '38 Avenue du Maréchal Foch',
              code_postal_brut: 44730,
              nom_commune_brut: 'ST MICHEL CHEF CHEF',
              label_brut: '38 Avenue du Maréchal Foch 44730 ST MICHEL CHEF CHEF',
              enum_statut_geocodage_ban_id: '1',
              ban_date_appel: '2023-01-31',
              ban_id: '44182_0800_00038',
              ban_label: '38 Avenue Foch 44730 Saint-Michel-Chef-Chef',
              ban_housenumber: 38,
              ban_street: 'Avenue Foch',
              ban_citycode: 44182,
              ban_postcode: 44730,
              ban_city: 'Saint-Michel-Chef-Chef',
              ban_type: 'housenumber',
              ban_score: 0.6146499999999999,
              ban_x: 309154.97,
              ban_y: 6686833.96,
              compl_nom_residence: '',
              compl_ref_batiment: '23/01/0880',
              compl_etage_appartement: 0,
              compl_ref_cage_escalier: '',
              compl_ref_logement: 'palier porte de droite'
            }
          }
        }
      },
      logement: {
        caracteristique_generale: {
          annee_construction: 1949,
          enum_periode_construction_id: '2',
          enum_methode_application_dpe_log_id: '2',
          surface_habitable_logement: 40.94,
          nombre_niveau_logement: 1,
          hsp: 2.5,
          nombre_appartement: 1
        },
        meteo: {
          enum_zone_climatique_id: '5',
          enum_classe_altitude_id: '1',
          batiment_materiaux_anciens: 0
        },
        enveloppe: {
          inertie: {
            inertie_plancher_bas_lourd: 0,
            inertie_plancher_haut_lourd: 0,
            inertie_paroi_verticale_lourd: 0,
            enum_classe_inertie_id: '4'
          },
          mur_collection: {
            mur: [
              {
                donnee_entree: {
                  description:
                    "Mur  1 Sud - Inconnu (à structure lourde) avec un doublage rapporté avec isolation intérieure (6 cm) donnant sur des circulations avec ouverture directe sur l'extérieur",
                  reference: '2023_01_31_12_13_08_05242480060202',
                  reference_lnc: 'LNC2023_01_31_12_13_08_05242480060202',
                  tv_coef_reduction_deperdition_id: 100,
                  surface_aiu: 20,
                  surface_aue: 2.5,
                  enum_cfg_isolation_lnc_id: '2',
                  enum_type_adjacence_id: '15',
                  enum_orientation_id: '1',
                  surface_paroi_totale: 6.94,
                  surface_paroi_opaque: 6.94,
                  tv_umur0_id: 1,
                  enum_materiaux_structure_mur_id: '1',
                  enum_methode_saisie_u0_id: '2',
                  paroi_ancienne: 0,
                  enum_type_doublage_id: '3',
                  enum_type_isolation_id: '3',
                  epaisseur_isolation: 6,
                  enum_methode_saisie_u_id: '3'
                },
                donnee_intermediaire: {
                  b: 0.15,
                  umur: 0.5,
                  umur0: 2
                }
              },
              {
                donnee_entree: {
                  description:
                    'Mur  2 Sud - Inconnu (à structure lourde) avec un doublage rapporté avec isolation intérieure donnant sur un local chauffé',
                  reference: '2023_01_31_12_17_54_5145061003417626',
                  reference_lnc: '',
                  tv_coef_reduction_deperdition_id: 283,
                  enum_type_adjacence_id: '22',
                  enum_orientation_id: '1',
                  surface_paroi_totale: 8.63,
                  surface_paroi_opaque: 8.63,
                  tv_umur0_id: 1,
                  enum_materiaux_structure_mur_id: '1',
                  enum_methode_saisie_u0_id: '2',
                  paroi_ancienne: 0,
                  enum_type_doublage_id: '3',
                  enum_type_isolation_id: '3',
                  epaisseur_isolation: 6,
                  enum_methode_saisie_u_id: '3'
                },
                donnee_intermediaire: {
                  b: 0,
                  umur: 0.5,
                  umur0: 2
                }
              },
              {
                donnee_entree: {
                  description:
                    "Mur  3 Ouest - Inconnu (à structure lourde) avec un doublage rapporté avec isolation intérieure (6 cm) donnant sur l'extérieur",
                  reference: '2023_01_31_12_15_58_3841799001196565',
                  reference_lnc: '',
                  tv_coef_reduction_deperdition_id: 1,
                  enum_type_adjacence_id: '1',
                  enum_orientation_id: '4',
                  surface_paroi_totale: 10.76,
                  surface_paroi_opaque: 10.76,
                  tv_umur0_id: 1,
                  enum_materiaux_structure_mur_id: '1',
                  enum_methode_saisie_u0_id: '2',
                  paroi_ancienne: 0,
                  enum_type_doublage_id: '3',
                  enum_type_isolation_id: '3',
                  epaisseur_isolation: 6,
                  enum_methode_saisie_u_id: '3'
                },
                donnee_intermediaire: {
                  b: 1,
                  umur: 0.5,
                  umur0: 2
                }
              },
              {
                donnee_entree: {
                  description:
                    'Mur  4 Nord - Inconnu (à structure lourde) avec un doublage rapporté avec isolation intérieure donnant sur un local chauffé',
                  reference: '2023_01_31_12_16_14_7749184003431753',
                  reference_lnc: '',
                  tv_coef_reduction_deperdition_id: 283,
                  enum_type_adjacence_id: '22',
                  enum_orientation_id: '2',
                  surface_paroi_totale: 22.35,
                  surface_paroi_opaque: 22.35,
                  tv_umur0_id: 1,
                  enum_materiaux_structure_mur_id: '1',
                  enum_methode_saisie_u0_id: '2',
                  paroi_ancienne: 0,
                  enum_type_doublage_id: '3',
                  enum_type_isolation_id: '3',
                  epaisseur_isolation: 6,
                  enum_methode_saisie_u_id: '3'
                },
                donnee_intermediaire: {
                  b: 0,
                  umur: 0.5,
                  umur0: 2
                }
              },
              {
                donnee_entree: {
                  description:
                    "Mur  5 Est - Inconnu (à structure lourde) avec un doublage rapporté avec isolation intérieure (6 cm) donnant sur l'extérieur",
                  reference: '2023_01_31_12_21_30_5626136006974349',
                  reference_lnc: '',
                  tv_coef_reduction_deperdition_id: 1,
                  enum_type_adjacence_id: '1',
                  enum_orientation_id: '3',
                  surface_paroi_totale: 10.58,
                  surface_paroi_opaque: 10.58,
                  tv_umur0_id: 1,
                  enum_materiaux_structure_mur_id: '1',
                  enum_methode_saisie_u0_id: '2',
                  paroi_ancienne: 0,
                  enum_type_doublage_id: '3',
                  enum_type_isolation_id: '3',
                  epaisseur_isolation: 6,
                  enum_methode_saisie_u_id: '3'
                },
                donnee_intermediaire: {
                  b: 1,
                  umur: 0.5,
                  umur0: 2
                }
              },
              {
                donnee_entree: {
                  description:
                    'Mur  6 Sud - Inconnu (à structure lourde) avec un doublage rapporté avec isolation intérieure donnant sur un local chauffé',
                  reference: '2023_01_31_12_21_55_07518810005182618',
                  reference_lnc: '',
                  tv_coef_reduction_deperdition_id: 283,
                  enum_type_adjacence_id: '22',
                  enum_orientation_id: '1',
                  surface_paroi_totale: 2.9,
                  surface_paroi_opaque: 2.9,
                  tv_umur0_id: 1,
                  enum_materiaux_structure_mur_id: '1',
                  enum_methode_saisie_u0_id: '2',
                  paroi_ancienne: 0,
                  enum_type_doublage_id: '3',
                  enum_type_isolation_id: '3',
                  epaisseur_isolation: 6,
                  enum_methode_saisie_u_id: '3'
                },
                donnee_intermediaire: {
                  b: 0,
                  umur: 0.5,
                  umur0: 2
                }
              },
              {
                donnee_entree: {
                  description:
                    "Mur  7 Ouest - Inconnu (à structure lourde) avec un doublage rapporté avec isolation intérieure (6 cm) donnant sur des circulations avec ouverture directe sur l'extérieur",
                  reference: '2023_01_31_12_22_13_7696213009787799',
                  reference_lnc: 'LNC2023_01_31_12_22_13_7696213009787799',
                  tv_coef_reduction_deperdition_id: 101,
                  surface_aiu: 22.5,
                  surface_aue: 2.5,
                  enum_cfg_isolation_lnc_id: '2',
                  enum_type_adjacence_id: '15',
                  enum_orientation_id: '4',
                  surface_paroi_totale: 2.78,
                  surface_paroi_opaque: 2.78,
                  tv_umur0_id: 1,
                  enum_materiaux_structure_mur_id: '1',
                  enum_methode_saisie_u0_id: '2',
                  paroi_ancienne: 0,
                  enum_type_doublage_id: '3',
                  enum_type_isolation_id: '3',
                  epaisseur_isolation: 6,
                  enum_methode_saisie_u_id: '3'
                },
                donnee_intermediaire: {
                  b: 0.1,
                  umur: 0.5,
                  umur0: 2
                }
              }
            ]
          },
          plancher_bas_collection: {
            plancher_bas: [
              {
                donnee_entree: {
                  description:
                    'Plancher  1 - Plancher avec ou sans remplissage donnant sur un local chauffé',
                  reference: '2023_01_31_12_24_03_1563399009530591',
                  reference_lnc: '',
                  tv_coef_reduction_deperdition_id: 283,
                  enum_type_adjacence_id: '22',
                  surface_paroi_opaque: 40.17,
                  tv_upb0_id: 2,
                  enum_type_plancher_bas_id: '2',
                  enum_methode_saisie_u0_id: '2',
                  enum_type_isolation_id: '1',
                  enum_periode_isolation_id: '1',
                  tv_upb_id: 3,
                  enum_methode_saisie_u_id: '7',
                  calcul_ue: 0
                },
                donnee_intermediaire: {
                  b: 0,
                  upb: 1.45,
                  upb_final: 1.45,
                  upb0: 1.45
                }
              },
              {
                donnee_entree: {
                  description:
                    "Plancher  2 - Plancher avec ou sans remplissage donnant sur des circulations avec ouverture directe sur l'extérieur",
                  reference: '2023_01_31_12_25_12_0932367004354051',
                  reference_lnc: 'LNC2023_01_31_12_25_12_0932367004354051',
                  tv_coef_reduction_deperdition_id: 101,
                  surface_aiu: 20.63,
                  surface_aue: 2.5,
                  enum_cfg_isolation_lnc_id: '2',
                  enum_type_adjacence_id: '15',
                  surface_paroi_opaque: 1.28,
                  tv_upb0_id: 2,
                  enum_type_plancher_bas_id: '2',
                  enum_methode_saisie_u0_id: '2',
                  enum_type_isolation_id: '1',
                  enum_periode_isolation_id: '1',
                  tv_upb_id: 3,
                  enum_methode_saisie_u_id: '7',
                  calcul_ue: 0
                },
                donnee_intermediaire: {
                  b: 0.1,
                  upb: 1.45,
                  upb_final: 1.45,
                  upb0: 1.45
                }
              }
            ]
          },
          plancher_haut_collection: {
            plancher_haut: [
              {
                donnee_entree: {
                  description:
                    'Plafond - Plafond avec ou sans remplissage donnant sur un local chauffé',
                  reference: '2023_01_31_12_23_23_52494070005245668',
                  reference_lnc: '',
                  tv_coef_reduction_deperdition_id: 283,
                  enum_type_adjacence_id: '22',
                  surface_paroi_opaque: 40.94,
                  tv_uph0_id: 2,
                  enum_type_plancher_haut_id: '2',
                  enum_methode_saisie_u0_id: '2',
                  enum_type_isolation_id: '1',
                  enum_periode_isolation_id: '1',
                  tv_uph_id: 51,
                  enum_methode_saisie_u_id: '7'
                },
                donnee_intermediaire: {
                  b: 0,
                  uph: 1.45,
                  uph0: 1.45
                }
              }
            ]
          },
          baie_vitree_collection: {
            baie_vitree: [
              {
                donnee_entree: {
                  description:
                    "Fenêtre  1 Ouest - Fenêtres battantes pvc, orientées Ouest, double vitrage avec lame d'air 14 mm",
                  reference: '2023_01_31_12_26_06_9403465002513371',
                  reference_paroi: '2023_01_31_12_15_58_3841799001196565',
                  reference_lnc: '',
                  tv_coef_reduction_deperdition_id: 1,
                  enum_type_adjacence_id: '1',
                  surface_totale_baie: 3.8,
                  nb_baie: 2,
                  tv_ug_id: 6,
                  enum_type_vitrage_id: '2',
                  enum_inclinaison_vitrage_id: '3',
                  enum_type_gaz_lame_id: '1',
                  epaisseur_lame: 14,
                  vitrage_vir: 0,
                  enum_methode_saisie_perf_vitrage_id: '1',
                  tv_uw_id: 348,
                  enum_type_materiaux_menuiserie_id: '5',
                  enum_type_baie_id: '4',
                  double_fenetre: 0,
                  uw_1: 2.7,
                  sw_1: 0.44000000000000006,
                  enum_type_fermeture_id: '1',
                  presence_retour_isolation: 0,
                  largeur_dormant: 5,
                  tv_sw_id: 110,
                  enum_type_pose_id: '2',
                  enum_orientation_id: '4',
                  tv_coef_masque_proche_id: 19,
                  masque_lointain_non_homogene_collection: ''
                },
                donnee_intermediaire: {
                  b: 1,
                  ug: 2.8,
                  uw: 2.7,
                  u_menuiserie: 2.7,
                  sw: 0.44,
                  fe1: 1,
                  fe2: 1
                }
              },
              {
                donnee_entree: {
                  description:
                    "Fenêtre  2 Est - Fenêtres battantes pvc, orientées Est, double vitrage avec lame d'air 14 mm",
                  reference: '2023_01_31_12_28_28_1566482003995953',
                  reference_paroi: '2023_01_31_12_21_30_5626136006974349',
                  reference_lnc: '',
                  tv_coef_reduction_deperdition_id: 1,
                  enum_type_adjacence_id: '1',
                  surface_totale_baie: 3.8,
                  nb_baie: 2,
                  tv_ug_id: 6,
                  enum_type_vitrage_id: '2',
                  enum_inclinaison_vitrage_id: '3',
                  enum_type_gaz_lame_id: '1',
                  epaisseur_lame: 14,
                  vitrage_vir: 0,
                  enum_methode_saisie_perf_vitrage_id: '1',
                  tv_uw_id: 348,
                  enum_type_materiaux_menuiserie_id: '5',
                  enum_type_baie_id: '4',
                  double_fenetre: 0,
                  uw_1: 2.7,
                  sw_1: 0.44000000000000006,
                  enum_type_fermeture_id: '1',
                  presence_retour_isolation: 0,
                  largeur_dormant: 5,
                  tv_sw_id: 110,
                  enum_type_pose_id: '2',
                  enum_orientation_id: '3',
                  tv_coef_masque_proche_id: 19,
                  masque_lointain_non_homogene_collection: ''
                },
                donnee_intermediaire: {
                  b: 1,
                  ug: 2.8,
                  uw: 2.7,
                  u_menuiserie: 2.7,
                  sw: 0.44,
                  fe1: 1,
                  fe2: 1
                }
              }
            ]
          },
          porte_collection: {
            porte: [
              {
                donnee_entree: {
                  description: 'Porte - Porte(s) bois opaque pleine',
                  reference: '2023_01_31_12_28_52_2339669002432305',
                  reference_paroi: '2023_01_31_12_13_08_05242480060202',
                  reference_lnc: 'LNC2023_01_31_12_28_52_2339669002432305',
                  enum_cfg_isolation_lnc_id: '2',
                  enum_type_adjacence_id: '15',
                  tv_coef_reduction_deperdition_id: 100,
                  surface_aiu: 20,
                  surface_aue: 2.5,
                  surface_porte: 1.49,
                  tv_uporte_id: 1,
                  enum_methode_saisie_uporte_id: '1',
                  enum_type_porte_id: '1',
                  nb_porte: 1,
                  largeur_dormant: 5,
                  presence_retour_isolation: 0,
                  enum_type_pose_id: '2'
                },
                donnee_intermediaire: {
                  uporte: 3.5,
                  b: 0.15
                }
              }
            ]
          },
          ets_collection: '',
          pont_thermique_collection: ''
        },
        ventilation_collection: {
          ventilation: [
            {
              donnee_entree: {
                surface_ventile: 40.94,
                description: 'VMC SF Auto réglable avant 1982',
                reference: '2023_01_31_12_30_50_1712689004447582',
                data_complementaires: '',
                plusieurs_facade_exposee: 1,
                tv_q4pa_conv_id: 11,
                enum_methode_saisie_q4pa_conv_id: '1',
                tv_debits_ventilation_id: 3,
                enum_type_ventilation_id: '3',
                ventilation_post_2012: 0,
                ref_produit_ventilation: ''
              },
              donnee_intermediaire: {
                pvent_moy: 37.09983,
                q4pa_conv: 1.9,
                conso_auxiliaire_ventilation: 325,
                hperm: 3.05042,
                hvent: 27.42161
              }
            }
          ]
        },
        climatisation_collection: '',
        production_elec_enr: '',
        installation_ecs_collection: {
          installation_ecs: [
            {
              donnee_entree: {
                description:
                  'Ballon électrique à accumulation vertical (autres catégorie ou inconnue), contenance ballon 50 L',
                reference: '2023_01_31_12_32_01_3225469008727224',
                enum_cfg_installation_ecs_id: '1',
                enum_type_installation_id: '1',
                enum_methode_calcul_conso_id: '1',
                surface_habitable: 40.94,
                nombre_logement: 1,
                nombre_niveau_installation_ecs: 1,
                tv_rendement_distribution_ecs_id: 1,
                enum_bouclage_reseau_ecs_id: '1'
              },
              donnee_intermediaire: {
                rendement_distribution: 0.93,
                besoin_ecs: 999.0436877099,
                besoin_ecs_depensier: 1409.3652023050372,
                conso_ecs: 1332.0005244192473,
                conso_ecs_depensier: 1773.2064540914378
              },
              generateur_ecs_collection: {
                generateur_ecs: [
                  {
                    donnee_entree: {
                      description:
                        'Electrique - Ballon électrique à accumulation vertical (autres catégorie ou inconnue)',
                      reference: 'Generateur:2023_01_31_12_32_01_3225469008727224',
                      reference_generateur_mixte: '',
                      enum_type_generateur_ecs_id: '69',
                      ref_produit_generateur_ecs: '',
                      enum_usage_generateur_id: '2',
                      enum_type_energie_id: '1',
                      enum_methode_saisie_carac_sys_id: '1',
                      tv_pertes_stockage_id: 2,
                      identifiant_reseau_chaleur: '',
                      enum_type_stockage_ecs_id: '3',
                      position_volume_chauffe: 1,
                      volume_stockage: 50
                    },
                    donnee_intermediaire: {
                      ratio_besoin_ecs: 1,
                      rendement_generation: 1,
                      conso_ecs: 1332.0005244192473,
                      conso_ecs_depensier: 1773.2064540914378,
                      rendement_stockage: 0.806487
                    }
                  }
                ]
              }
            }
          ]
        },
        installation_chauffage_collection: {
          installation_chauffage: [
            {
              donnee_entree: {
                description:
                  'Panneau rayonnant électrique NFC, NF** et NF*** avec programmateur pièce par pièce (système individuel)',
                reference: '2023_01_31_12_29_20_695867000781047',
                surface_chauffee: 40.94,
                nombre_niveau_installation_ch: 1,
                enum_cfg_installation_ch_id: '1',
                enum_type_installation_id: '1',
                enum_methode_calcul_conso_id: '1'
              },
              donnee_intermediaire: {
                besoin_ch: 1790.872039366649,
                besoin_ch_depensier: 2334.0446192817185,
                conso_ch: 1667.4570673134315,
                conso_ch_depensier: 2173.1978110633668
              },
              emetteur_chauffage_collection: {
                emetteur_chauffage: [
                  {
                    donnee_entree: {
                      description: '',
                      reference: 'Emetteur:2023_01_31_12_29_20_695867000781047#1',
                      surface_chauffee: 40.94,
                      tv_rendement_emission_id: 2,
                      tv_rendement_distribution_ch_id: 1,
                      tv_rendement_regulation_id: 2,
                      enum_type_emission_distribution_id: '2',
                      tv_intermittence_id: 138,
                      reseau_distribution_isole: 0,
                      enum_equipement_intermittence_id: '4',
                      enum_type_regulation_id: '2',
                      enum_periode_installation_emetteur_id: '1',
                      enum_type_chauffage_id: '1',
                      enum_temp_distribution_ch_id: '1',
                      enum_lien_generateur_emetteur_id: '1'
                    },
                    donnee_intermediaire: {
                      i0: 0.86,
                      rendement_emission: 0.97,
                      rendement_distribution: 1,
                      rendement_regulation: 0.99
                    }
                  }
                ]
              },
              generateur_chauffage_collection: {
                generateur_chauffage: [
                  {
                    donnee_entree: {
                      description: 'Electrique - Panneau rayonnant électrique NFC, NF** et NF***',
                      reference: 'Generateur:2023_01_31_12_29_20_695867000781047#1',
                      data_complementaires: '',
                      reference_generateur_mixte: '',
                      ref_produit_generateur_ch: 'Sans Objet',
                      enum_type_generateur_ch_id: '99',
                      enum_usage_generateur_id: '1',
                      enum_type_energie_id: '1',
                      position_volume_chauffe: 1,
                      tv_rendement_generation_id: 29,
                      identifiant_reseau_chaleur: '',
                      enum_methode_saisie_carac_sys_id: '1',
                      enum_lien_generateur_emetteur_id: '1'
                    },
                    donnee_intermediaire: {
                      rendement_generation: 1,
                      conso_ch: 1667.4570673134315,
                      conso_ch_depensier: 2173.1978110633668
                    }
                  }
                ]
              }
            }
          ]
        },
        sortie: {
          deperdition: {
            hvent: 27.421612,
            hperm: 3.050416982269853,
            deperdition_renouvellement_air: 30.47202898226985,
            deperdition_mur: 11.3295,
            deperdition_plancher_bas: 0.1856,
            deperdition_plancher_haut: 0,
            deperdition_baie_vitree: 20.52,
            deperdition_porte: 0.78225,
            deperdition_pont_thermique: 0,
            deperdition_enveloppe: 63.28937898226985
          },
          apport_et_besoin: {
            surface_sud_equivalente: 29.94552,
            apport_solaire_fr: 0,
            apport_interne_fr: 0,
            apport_solaire_ch: 1215.9069912,
            apport_interne_ch: 1438.6232428464284,
            fraction_apport_gratuit_ch: 0.4627139116970541,
            fraction_apport_gratuit_depensier_ch: 0.4225758311750647,
            pertes_distribution_ecs_recup: 30.781494005439825,
            pertes_distribution_ecs_recup_depensier: 44.57455313810781,
            pertes_stockage_ecs_recup: 79.41832767123286,
            pertes_generateur_ch_recup: 0,
            pertes_generateur_ch_recup_depensier: 0,
            nadeq: 1.580125,
            v40_ecs_journalier: 88.487,
            v40_ecs_journalier_depensier: 124.829875,
            besoin_ch: 1790.872039366649,
            besoin_ch_depensier: 2334.0446192817185,
            besoin_ecs: 999.0436877099,
            besoin_ecs_depensier: 1409.3652023050372,
            besoin_fr: 0,
            besoin_fr_depensier: 0
          },
          ef_conso: {
            conso_ch: 1667.4570673134315,
            conso_ch_depensier: 2173.1978110633668,
            conso_ecs: 1332.0005244192473,
            conso_ecs_depensier: 1773.2064540914378,
            conso_eclairage: 78.9757164,
            conso_auxiliaire_generation_ch: 0,
            conso_auxiliaire_generation_ch_depensier: 0,
            conso_auxiliaire_distribution_ch: 0,
            conso_auxiliaire_generation_ecs: 0,
            conso_auxiliaire_generation_ecs_depensier: 0,
            conso_auxiliaire_distribution_ecs: 0,
            conso_auxiliaire_ventilation: 324.99449328000003,
            conso_totale_auxiliaire: 324.99449328000003,
            conso_fr: 0,
            conso_fr_depensier: 0,
            conso_5_usages: 3403.4278014126785,
            conso_5_usages_m2: 83
          },
          ep_conso: {
            ep_conso_ch: 3835.151254820892,
            ep_conso_ch_depensier: 3835.151254820892,
            ep_conso_ecs: 3063.6012061642687,
            ep_conso_ecs_depensier: 3063.6012061642687,
            ep_conso_eclairage: 181.64414771999998,
            ep_conso_auxiliaire_generation_ch: 0,
            ep_conso_auxiliaire_generation_ch_depensier: 0,
            ep_conso_auxiliaire_distribution_ch: 0,
            ep_conso_auxiliaire_generation_ecs: 0,
            ep_conso_auxiliaire_generation_ecs_depensier: 0,
            ep_conso_auxiliaire_distribution_ecs: 0,
            ep_conso_auxiliaire_ventilation: 747.487334544,
            ep_conso_totale_auxiliaire: 747.487334544,
            ep_conso_fr: 0,
            ep_conso_fr_depensier: 0,
            ep_conso_5_usages: 7827.88394324916,
            ep_conso_5_usages_m2: 191,
            classe_bilan_dpe: 'D'
          },
          emission_ges: {
            emission_ges_ch: 131.72910831776107,
            emission_ges_ch_depensier: 131.72910831776107,
            emission_ges_ecs: 86.58003408725108,
            emission_ges_ecs_depensier: 86.58003408725108,
            emission_ges_eclairage: 5.4493244316,
            emission_ges_auxiliaire_generation_ch: 0,
            emission_ges_auxiliaire_generation_ch_depensier: 0,
            emission_ges_auxiliaire_distribution_ch: 0,
            emission_ges_auxiliaire_generation_ecs: 0,
            emission_ges_auxiliaire_generation_ecs_depensier: 0,
            emission_ges_auxiliaire_distribution_ecs: 0,
            emission_ges_auxiliaire_ventilation: 20.79964756992,
            emission_ges_totale_auxiliaire: 20.79964756992,
            emission_ges_fr: 0,
            emission_ges_fr_depensier: 0,
            emission_ges_5_usages: 244.55811440653216,
            emission_ges_5_usages_m2: 5,
            classe_emission_ges: 'A'
          },
          cout: {
            cout_ch: 312.82530676783693,
            cout_ch_depensier: 312.82530676783693,
            cout_ecs: 249.8915749223586,
            cout_ecs_depensier: 249.8915749223586,
            cout_eclairage: 14.81633512150618,
            cout_auxiliaire_generation_ch: 0,
            cout_auxiliaire_generation_ch_depensier: 0,
            cout_auxiliaire_distribution_ch: 0,
            cout_auxiliaire_generation_ecs: 0,
            cout_auxiliaire_generation_ecs_depensier: 0,
            cout_auxiliaire_distribution_ecs: 0,
            cout_auxiliaire_ventilation: 60.970986330686436,
            cout_total_auxiliaire: 60.970986330686436,
            cout_fr: 0,
            cout_fr_depensier: 0,
            cout_5_usages: 638.5042031423882
          },
          production_electricite: {
            production_pv: 0,
            conso_elec_ac: 0,
            conso_elec_ac_ch: 0,
            conso_elec_ac_ecs: 0,
            conso_elec_ac_fr: 0,
            conso_elec_ac_eclairage: 0,
            conso_elec_ac_auxiliaire: 0,
            conso_elec_ac_autre_usage: 0
          },
          sortie_par_energie_collection: {
            sortie_par_energie: [
              {
                enum_type_energie_id: '1',
                conso_ch: 1667.4570673134315,
                conso_ecs: 1332.0005244192473,
                conso_5_usages: 3403.4278014126785,
                emission_ges_ch: 131.72910831776107,
                emission_ges_ecs: 86.58003408725108,
                emission_ges_5_usages: 244.55811440653216,
                cout_ch: 312.82530676783693,
                cout_ecs: 249.8915749223586,
                cout_5_usages: 638.5042031423882
              }
            ]
          },
          confort_ete: {
            isolation_toiture: 0,
            protection_solaire_exterieure: 0,
            aspect_traversant: 1,
            brasseur_air: 0,
            inertie_lourde: 0,
            enum_indicateur_confort_ete_id: '1'
          },
          qualite_isolation: {
            ubat: 0.7921156167028722,
            qualite_isol_enveloppe: 3,
            qualite_isol_mur: 3,
            qualite_isol_plancher_haut_comble_perdu: 1,
            qualite_isol_plancher_bas: 4,
            qualite_isol_menuiserie: 3
          }
        }
      },
      descriptif_enr_collection: '',
      descriptif_simplifie_collection: {
        descriptif_simplifie: [
          {
            description:
              "Inconnu (à structure lourde) avec un doublage rapporté avec isolation intérieure (6 cm) donnant sur des circulations avec ouverture directe sur l'extérieur",
            enum_categorie_descriptif_simplifie_id: '1'
          },
          {
            description:
              'Inconnu (à structure lourde) avec un doublage rapporté avec isolation intérieure donnant sur un local chauffé',
            enum_categorie_descriptif_simplifie_id: '1'
          },
          {
            description:
              "Inconnu (à structure lourde) avec un doublage rapporté avec isolation intérieure (6 cm) donnant sur l'extérieur",
            enum_categorie_descriptif_simplifie_id: '1'
          },
          {
            description:
              'Inconnu (à structure lourde) avec un doublage rapporté avec isolation intérieure donnant sur un local chauffé',
            enum_categorie_descriptif_simplifie_id: '1'
          },
          {
            description:
              "Inconnu (à structure lourde) avec un doublage rapporté avec isolation intérieure (6 cm) donnant sur l'extérieur",
            enum_categorie_descriptif_simplifie_id: '1'
          },
          {
            description:
              'Inconnu (à structure lourde) avec un doublage rapporté avec isolation intérieure donnant sur un local chauffé',
            enum_categorie_descriptif_simplifie_id: '1'
          },
          {
            description:
              "Inconnu (à structure lourde) avec un doublage rapporté avec isolation intérieure (6 cm) donnant sur des circulations avec ouverture directe sur l'extérieur",
            enum_categorie_descriptif_simplifie_id: '1'
          },
          {
            description: 'Plafond avec ou sans remplissage donnant sur un local chauffé',
            enum_categorie_descriptif_simplifie_id: '3'
          },
          {
            description: 'Plancher avec ou sans remplissage donnant sur un local chauffé',
            enum_categorie_descriptif_simplifie_id: '2'
          },
          {
            description:
              "Plancher avec ou sans remplissage donnant sur des circulations avec ouverture directe sur l'extérieur",
            enum_categorie_descriptif_simplifie_id: '2'
          },
          {
            description:
              "Fenêtres battantes pvc, orientées Ouest, double vitrage avec lame d'air 14 mm",
            enum_categorie_descriptif_simplifie_id: '4'
          },
          {
            description:
              "Fenêtres battantes pvc, orientées Est, double vitrage avec lame d'air 14 mm",
            enum_categorie_descriptif_simplifie_id: '4'
          },
          {
            description: 'Porte(s) bois opaque pleine',
            enum_categorie_descriptif_simplifie_id: '4'
          },
          {
            description:
              'Panneau rayonnant électrique NFC, NF** et NF*** avec programmateur pièce par pièce (système individuel)',
            enum_categorie_descriptif_simplifie_id: '5'
          },
          {
            description:
              'Panneau rayonnant électrique NFC, NF** et NF*** avec programmateur pièce par pièce (système individuel)',
            enum_categorie_descriptif_simplifie_id: '9'
          },
          {
            description: 'VMC SF Auto réglable avant 1982',
            enum_categorie_descriptif_simplifie_id: '8'
          },
          {
            description:
              'Ballon électrique à accumulation vertical (autres catégorie ou inconnue), contenance ballon 50 L',
            enum_categorie_descriptif_simplifie_id: '6'
          }
        ]
      },
      fiche_technique_collection: {
        fiche_technique: [
          {
            enum_categorie_fiche_technique_id: '11',
            sous_fiche_technique_collection: {
              sous_fiche_technique: [
                {
                  description: 'Département: 44 Loire Atlantique',
                  valeur: '44 Loire Atlantique',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Altitude: 14 m',
                  valeur: '14 m',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '4'
                },
                {
                  description: 'Type de bien: Appartement',
                  valeur: 'Appartement',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Année de construction: 1949',
                  valeur: 1949,
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '5'
                },
                {
                  description: 'Surface habitable du logement: 40,94 m²',
                  valeur: '40,94 m²',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '3'
                },
                {
                  description: 'Nombre de niveaux du logement: 1',
                  valeur: 1,
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Hauteur moyenne sous plafond: 2,5 m',
                  valeur: '2,5 m',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                }
              ]
            }
          },
          {
            enum_categorie_fiche_technique_id: '1',
            sous_fiche_technique_collection: {
              sous_fiche_technique: [
                {
                  description: 'Surface du mur: 6,94 m²',
                  valeur: '6,94 m²',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description:
                    "Type de local adjacent: des circulations avec ouverture directe sur l'extérieur",
                  valeur: "des circulations avec ouverture directe sur l'extérieur",
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Surface Aiu: 20 m²',
                  valeur: '20 m²',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Etat isolation des parois Aiu: non isolé',
                  valeur: 'non isolé',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Surface Aue: 2,5 m²',
                  valeur: '2,5 m²',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Etat isolation des parois Aue: non isolé',
                  valeur: 'non isolé',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Matériau mur: Inconnu (à structure lourde)',
                  valeur: 'Inconnu (à structure lourde)',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Isolation: oui',
                  valeur: 'oui',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Epaisseur isolant: 6 cm',
                  valeur: '6 cm',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: "Doublage rapporté avec lame d'air: moins de 15mm ou inconnu",
                  valeur: 'moins de 15mm ou inconnu',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Umur0 (paroi inconnue): 2,5 W/m².K',
                  valeur: '2,5 W/m².K',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '1'
                },
                {
                  description: 'Commentaires: 1949',
                  valeur: 1949,
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                }
              ]
            }
          },
          {
            enum_categorie_fiche_technique_id: '1',
            sous_fiche_technique_collection: {
              sous_fiche_technique: [
                {
                  description: 'Surface du mur: 8,63 m²',
                  valeur: '8,63 m²',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Type de local adjacent: un local chauffé',
                  valeur: 'un local chauffé',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Matériau mur: Inconnu (à structure lourde)',
                  valeur: 'Inconnu (à structure lourde)',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Isolation: oui',
                  valeur: 'oui',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Epaisseur isolant: 6 cm',
                  valeur: '6 cm',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: "Doublage rapporté avec lame d'air: moins de 15mm ou inconnu",
                  valeur: 'moins de 15mm ou inconnu',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Umur0 (paroi inconnue): 2,5 W/m².K',
                  valeur: '2,5 W/m².K',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '1'
                }
              ]
            }
          },
          {
            enum_categorie_fiche_technique_id: '1',
            sous_fiche_technique_collection: {
              sous_fiche_technique: [
                {
                  description: 'Surface du mur: 10,76 m²',
                  valeur: '10,76 m²',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: "Type de local adjacent: l'extérieur",
                  valeur: "l'extérieur",
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Matériau mur: Inconnu (à structure lourde)',
                  valeur: 'Inconnu (à structure lourde)',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Isolation: oui',
                  valeur: 'oui',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Epaisseur isolant: 6 cm',
                  valeur: '6 cm',
                  detail_origine_donnee: 'PhDPE001',
                  enum_origine_donnee_id: '3'
                },
                {
                  description: "Doublage rapporté avec lame d'air: moins de 15mm ou inconnu",
                  valeur: 'moins de 15mm ou inconnu',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Umur0 (paroi inconnue): 2,5 W/m².K',
                  valeur: '2,5 W/m².K',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '1'
                }
              ]
            }
          },
          {
            enum_categorie_fiche_technique_id: '1',
            sous_fiche_technique_collection: {
              sous_fiche_technique: [
                {
                  description: 'Surface du mur: 22,35 m²',
                  valeur: '22,35 m²',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Type de local adjacent: un local chauffé',
                  valeur: 'un local chauffé',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Matériau mur: Inconnu (à structure lourde)',
                  valeur: 'Inconnu (à structure lourde)',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Isolation: oui',
                  valeur: 'oui',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Epaisseur isolant: 6 cm',
                  valeur: '6 cm',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: "Doublage rapporté avec lame d'air: moins de 15mm ou inconnu",
                  valeur: 'moins de 15mm ou inconnu',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Umur0 (paroi inconnue): 2,5 W/m².K',
                  valeur: '2,5 W/m².K',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '1'
                }
              ]
            }
          },
          {
            enum_categorie_fiche_technique_id: '1',
            sous_fiche_technique_collection: {
              sous_fiche_technique: [
                {
                  description: 'Surface du mur: 10,58 m²',
                  valeur: '10,58 m²',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: "Type de local adjacent: l'extérieur",
                  valeur: "l'extérieur",
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Matériau mur: Inconnu (à structure lourde)',
                  valeur: 'Inconnu (à structure lourde)',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Isolation: oui',
                  valeur: 'oui',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Epaisseur isolant: 6 cm',
                  valeur: '6 cm',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: "Doublage rapporté avec lame d'air: moins de 15mm ou inconnu",
                  valeur: 'moins de 15mm ou inconnu',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Umur0 (paroi inconnue): 2,5 W/m².K',
                  valeur: '2,5 W/m².K',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '1'
                }
              ]
            }
          },
          {
            enum_categorie_fiche_technique_id: '1',
            sous_fiche_technique_collection: {
              sous_fiche_technique: [
                {
                  description: 'Surface du mur: 2,9 m²',
                  valeur: '2,9 m²',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Type de local adjacent: un local chauffé',
                  valeur: 'un local chauffé',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Matériau mur: Inconnu (à structure lourde)',
                  valeur: 'Inconnu (à structure lourde)',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Isolation: oui',
                  valeur: 'oui',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Epaisseur isolant: 6 cm',
                  valeur: '6 cm',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: "Doublage rapporté avec lame d'air: moins de 15mm ou inconnu",
                  valeur: 'moins de 15mm ou inconnu',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Umur0 (paroi inconnue): 2,5 W/m².K',
                  valeur: '2,5 W/m².K',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '1'
                }
              ]
            }
          },
          {
            enum_categorie_fiche_technique_id: '1',
            sous_fiche_technique_collection: {
              sous_fiche_technique: [
                {
                  description: 'Surface du mur: 2,78 m²',
                  valeur: '2,78 m²',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description:
                    "Type de local adjacent: des circulations avec ouverture directe sur l'extérieur",
                  valeur: "des circulations avec ouverture directe sur l'extérieur",
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Surface Aiu: 22.5 m²',
                  valeur: '22.5 m²',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Etat isolation des parois Aiu: non isolé',
                  valeur: 'non isolé',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Surface Aue: 2.5 m²',
                  valeur: '2.5 m²',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Etat isolation des parois Aue: non isolé',
                  valeur: 'non isolé',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Matériau mur: Inconnu (à structure lourde)',
                  valeur: 'Inconnu (à structure lourde)',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Isolation: oui',
                  valeur: 'oui',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Epaisseur isolant: 6 cm',
                  valeur: '6 cm',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: "Doublage rapporté avec lame d'air: moins de 15mm ou inconnu",
                  valeur: 'moins de 15mm ou inconnu',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Umur0 (paroi inconnue): 2,5 W/m².K',
                  valeur: '2,5 W/m².K',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '1'
                }
              ]
            }
          },
          {
            enum_categorie_fiche_technique_id: '2',
            sous_fiche_technique_collection: {
              sous_fiche_technique: [
                {
                  description: 'Surface de plancher bas: 40,17 m²',
                  valeur: '40,17 m²',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Type de local adjacent: un local chauffé',
                  valeur: 'un local chauffé',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Type de pb: Plancher avec ou sans remplissage',
                  valeur: 'Plancher avec ou sans remplissage',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Isolation : oui / non / inconnue: inconnue',
                  valeur: 'inconnue',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Année de construction/rénovation: Avant 1948',
                  valeur: 'Avant 1948',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '1'
                }
              ]
            }
          },
          {
            enum_categorie_fiche_technique_id: '2',
            sous_fiche_technique_collection: {
              sous_fiche_technique: [
                {
                  description: 'Surface de plancher bas: 1,28 m²',
                  valeur: '1,28 m²',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description:
                    "Type de local adjacent: des circulations avec ouverture directe sur l'extérieur",
                  valeur: "des circulations avec ouverture directe sur l'extérieur",
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Surface Aiu: 20.63 m²',
                  valeur: '20.63 m²',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Etat isolation des parois Aiu: non isolé',
                  valeur: 'non isolé',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Surface Aue: 2,5 m²',
                  valeur: '2,5 m²',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Etat isolation des parois Aue: non isolé',
                  valeur: 'non isolé',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Type de pb: Plancher avec ou sans remplissage',
                  valeur: 'Plancher avec ou sans remplissage',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Isolation : oui / non / inconnue: inconnue',
                  valeur: 'inconnue',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Année de construction/rénovation: Avant 1948',
                  valeur: 'Avant 1948',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '1'
                }
              ]
            }
          },
          {
            enum_categorie_fiche_technique_id: '3',
            sous_fiche_technique_collection: {
              sous_fiche_technique: [
                {
                  description: 'Surface de plancher haut: 40,94 m²',
                  valeur: '40,94 m²',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Type de local adjacent: un local chauffé',
                  valeur: 'un local chauffé',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Type de ph: Plafond avec ou sans remplissage',
                  valeur: 'Plafond avec ou sans remplissage',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Isolation: inconnue',
                  valeur: 'inconnue',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Année de construction/rénovation: Avant 1948',
                  valeur: 'Avant 1948',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '1'
                }
              ]
            }
          },
          {
            enum_categorie_fiche_technique_id: '4',
            sous_fiche_technique_collection: {
              sous_fiche_technique: [
                {
                  description: 'Surface de baies: 3,8 m²',
                  valeur: '3,8 m²',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Placement: Mur 3 Ouest',
                  valeur: 'Mur 3 Ouest',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Orientation des baies: Ouest',
                  valeur: 'Ouest',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Inclinaison vitrage: vertical',
                  valeur: 'vertical',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Type ouverture: Fenêtres battantes',
                  valeur: 'Fenêtres battantes',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Type menuiserie: PVC',
                  valeur: 'PVC',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Type de vitrage: double vitrage',
                  valeur: 'double vitrage',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Epaisseur lame air: 14 mm',
                  valeur: '14 mm',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Présence couche peu émissive: non',
                  valeur: 'non',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Gaz de remplissage: Air',
                  valeur: 'Air',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Longueur Pont Thermique: 9,6 m',
                  valeur: '9,6 m',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Positionnement de la menuiserie: au nu intérieur',
                  valeur: 'au nu intérieur',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Largeur du dormant menuiserie: Lp: 5 cm',
                  valeur: 'Lp: 5 cm',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Type de masques proches: Absence de masque proche',
                  valeur: 'Absence de masque proche',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Type de masques lointains: Absence de masque lointain',
                  valeur: 'Absence de masque lointain',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                }
              ]
            }
          },
          {
            enum_categorie_fiche_technique_id: '4',
            sous_fiche_technique_collection: {
              sous_fiche_technique: [
                {
                  description: 'Surface de baies: 3,8 m²',
                  valeur: '3,8 m²',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Placement: Mur 5 Est',
                  valeur: 'Mur 5 Est',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Orientation des baies: Est',
                  valeur: 'Est',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Inclinaison vitrage: vertical',
                  valeur: 'vertical',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Type ouverture: Fenêtres battantes',
                  valeur: 'Fenêtres battantes',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Type menuiserie: PVC',
                  valeur: 'PVC',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Type de vitrage: double vitrage',
                  valeur: 'double vitrage',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Epaisseur lame air: 14 mm',
                  valeur: '14 mm',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Présence couche peu émissive: non',
                  valeur: 'non',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Gaz de remplissage: Air',
                  valeur: 'Air',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Longueur Pont Thermique: 9,6 m',
                  valeur: '9,6 m',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Positionnement de la menuiserie: au nu intérieur',
                  valeur: 'au nu intérieur',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Largeur du dormant menuiserie: Lp: 5 cm',
                  valeur: 'Lp: 5 cm',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Type de masques proches: Absence de masque proche',
                  valeur: 'Absence de masque proche',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Type de masques lointains: Absence de masque lointain',
                  valeur: 'Absence de masque lointain',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                }
              ]
            }
          },
          {
            enum_categorie_fiche_technique_id: '5',
            sous_fiche_technique_collection: {
              sous_fiche_technique: [
                {
                  description: 'Surface de porte: 1,49 m²',
                  valeur: '1,49 m²',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Placement: Mur 1 Sud',
                  valeur: 'Mur 1 Sud',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description:
                    "Type de local adjacent: des circulations avec ouverture directe sur l'extérieur",
                  valeur: "des circulations avec ouverture directe sur l'extérieur",
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Surface Aiu: 20 m²',
                  valeur: '20 m²',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Etat isolation des parois Aiu: non isolé',
                  valeur: 'non isolé',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Surface Aue: 2,5 m²',
                  valeur: '2,5 m²',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Etat isolation des parois Aue: non isolé',
                  valeur: 'non isolé',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Nature de la menuiserie: Porte simple en bois',
                  valeur: 'Porte simple en bois',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Type de porte: Porte opaque pleine',
                  valeur: 'Porte opaque pleine',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: "Présence de joints d'étanchéité: non",
                  valeur: 'non',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Longueur Pont Thermique: 4,81 m',
                  valeur: '4,81 m',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Positionnement de la menuiserie: au nu intérieur',
                  valeur: 'au nu intérieur',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Largeur du dormant menuiserie: Lp: 5 cm',
                  valeur: 'Lp: 5 cm',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                }
              ]
            }
          },
          {
            enum_categorie_fiche_technique_id: '6',
            sous_fiche_technique_collection: {
              sous_fiche_technique: [
                {
                  description: 'Type PT: Mur 1 Sud / Plafond',
                  valeur: 'Mur 1 Sud / Plafond',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Type isolation: ITI / inconnue',
                  valeur: 'ITI / inconnue',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Longueur du PT: 3,4 m',
                  valeur: '3,4 m',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                }
              ]
            }
          },
          {
            enum_categorie_fiche_technique_id: '6',
            sous_fiche_technique_collection: {
              sous_fiche_technique: [
                {
                  description: 'Type PT: Mur 1 Sud / Plancher 1',
                  valeur: 'Mur 1 Sud / Plancher 1',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Type isolation: ITI / inconnue',
                  valeur: 'ITI / inconnue',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Longueur du PT: 3,4 m',
                  valeur: '3,4 m',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                }
              ]
            }
          },
          {
            enum_categorie_fiche_technique_id: '6',
            sous_fiche_technique_collection: {
              sous_fiche_technique: [
                {
                  description: 'Type PT: Mur 3 Ouest / Plafond',
                  valeur: 'Mur 3 Ouest / Plafond',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Type isolation: ITI / inconnue',
                  valeur: 'ITI / inconnue',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Longueur du PT: 5,8 m',
                  valeur: '5,8 m',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                }
              ]
            }
          },
          {
            enum_categorie_fiche_technique_id: '6',
            sous_fiche_technique_collection: {
              sous_fiche_technique: [
                {
                  description: 'Type PT: Mur 3 Ouest / Plancher 1',
                  valeur: 'Mur 3 Ouest / Plancher 1',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Type isolation: ITI / inconnue',
                  valeur: 'ITI / inconnue',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Longueur du PT: 5,8 m',
                  valeur: '5,8 m',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                }
              ]
            }
          },
          {
            enum_categorie_fiche_technique_id: '6',
            sous_fiche_technique_collection: {
              sous_fiche_technique: [
                {
                  description: 'Type PT: Mur 5 Est / Plafond',
                  valeur: 'Mur 5 Est / Plafond',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Type isolation: ITI / inconnue',
                  valeur: 'ITI / inconnue',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Longueur du PT: 5,8 m',
                  valeur: '5,8 m',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                }
              ]
            }
          },
          {
            enum_categorie_fiche_technique_id: '6',
            sous_fiche_technique_collection: {
              sous_fiche_technique: [
                {
                  description: 'Type PT: Mur 5 Est / Plancher 1',
                  valeur: 'Mur 5 Est / Plancher 1',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Type isolation: ITI / inconnue',
                  valeur: 'ITI / inconnue',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Longueur du PT: 5,8 m',
                  valeur: '5,8 m',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                }
              ]
            }
          },
          {
            enum_categorie_fiche_technique_id: '6',
            sous_fiche_technique_collection: {
              sous_fiche_technique: [
                {
                  description: 'Type PT: Mur 7 Ouest / Plafond',
                  valeur: 'Mur 7 Ouest / Plafond',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Type isolation: ITI / inconnue',
                  valeur: 'ITI / inconnue',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Longueur du PT: 1,1 m',
                  valeur: '1,1 m',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                }
              ]
            }
          },
          {
            enum_categorie_fiche_technique_id: '6',
            sous_fiche_technique_collection: {
              sous_fiche_technique: [
                {
                  description: 'Type PT: Mur 7 Ouest / Plancher 1',
                  valeur: 'Mur 7 Ouest / Plancher 1',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Type isolation: ITI / inconnue',
                  valeur: 'ITI / inconnue',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Longueur du PT: 1,1 m',
                  valeur: '1,1 m',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                }
              ]
            }
          },
          {
            enum_categorie_fiche_technique_id: '10',
            sous_fiche_technique_collection: {
              sous_fiche_technique: [
                {
                  description: 'Type de ventilation: VMC SF Auto réglable avant 1982',
                  valeur: 'VMC SF Auto réglable avant 1982',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Année installation: 1949',
                  valeur: 1949,
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '1'
                },
                {
                  description: 'Energie utilisée: Electrique',
                  valeur: 'Electrique',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Façades exposées: plusieurs',
                  valeur: 'plusieurs',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Logement Traversant: oui',
                  valeur: 'oui',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                }
              ]
            }
          },
          {
            enum_categorie_fiche_technique_id: '7',
            sous_fiche_technique_collection: {
              sous_fiche_technique: [
                {
                  description: "Type d'installation de chauffage: Installation de chauffage simple",
                  valeur: 'Installation de chauffage simple',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Surface chauffée: 40,94 m²',
                  valeur: '40,94 m²',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description:
                    'Type générateur: Electrique - Panneau rayonnant électrique NFC, NF** et NF***',
                  valeur: 'Electrique - Panneau rayonnant électrique NFC, NF** et NF***',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description:
                    'Année installation générateur: 2015 (estimée en fonction de la marque et du modèle)',
                  valeur: '2015 (estimée en fonction de la marque et du modèle)',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Energie utilisée: Electrique',
                  valeur: 'Electrique',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Type émetteur: Panneau rayonnant électrique NFC, NF** et NF***',
                  valeur: 'Panneau rayonnant électrique NFC, NF** et NF***',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Type de chauffage: divisé',
                  valeur: 'divisé',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description:
                    'Equipement intermittence: Avec intermittence pièce par pièce avec minimum de température',
                  valeur: 'Avec intermittence pièce par pièce avec minimum de température',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                }
              ]
            }
          },
          {
            enum_categorie_fiche_technique_id: '8',
            sous_fiche_technique_collection: {
              sous_fiche_technique: [
                {
                  description: 'Nombre de niveaux desservis: 1',
                  valeur: 1,
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description:
                    'Type générateur: Electrique - Ballon électrique à accumulation vertical (autres catégorie ou inconnue)',
                  valeur:
                    'Electrique - Ballon électrique à accumulation vertical (autres catégorie ou inconnue)',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Année installation générateur: 1949',
                  valeur: 1949,
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '1'
                },
                {
                  description: 'Energie utilisée: Electrique',
                  valeur: 'Electrique',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Chaudière murale: non',
                  valeur: 'non',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description:
                    'Type de distribution: production en volume habitable alimentant des pièces contiguës',
                  valeur: 'production en volume habitable alimentant des pièces contiguës',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Type de production: accumulation',
                  valeur: 'accumulation',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                },
                {
                  description: 'Volume de stockage: 50 L',
                  valeur: '50 L',
                  detail_origine_donnee: '',
                  enum_origine_donnee_id: '2'
                }
              ]
            }
          }
        ]
      },
      justificatif_collection: {
        justificatif: {
          description: 'PhDPE001',
          enum_type_justificatif_id: '10'
        }
      },
      descriptif_geste_entretien_collection: {
        descriptif_geste_entretien: [
          {
            description:
              "Vérifier la température d'eau du ballon (55°C-60°C) pour éviter le risque de développement de la légionnelle (en dessous de 50°C).",
            enum_picto_geste_entretien_id: '9',
            categorie_geste_entretien: 'Chauffe-eau'
          },
          {
            description: "Eteindre les lumières lorsque personne n'utilise la pièce.",
            enum_picto_geste_entretien_id: '4',
            categorie_geste_entretien: 'Eclairage'
          },
          {
            description: 'Faire vérifier les isolants et les compléter tous les 20 ans.',
            enum_picto_geste_entretien_id: '13',
            categorie_geste_entretien: 'Isolation'
          },
          {
            description: 'Ne jamais placer un meuble devant un émetteur de chaleur.',
            enum_picto_geste_entretien_id: '3',
            categorie_geste_entretien: 'Radiateur'
          },
          {
            description:
              "Nettoyage et réglage de l'installation tous les 3 ans par un professionnel.",
            enum_picto_geste_entretien_id: '1',
            categorie_geste_entretien: 'Ventilation'
          },
          {
            description: 'Nettoyer régulièrement les bouches.',
            enum_picto_geste_entretien_id: '1',
            categorie_geste_entretien: 'Ventilation'
          },
          {
            description: 'Veiller à ouvrir les fenêtres de chaque pièce très régulièrement',
            enum_picto_geste_entretien_id: '1',
            categorie_geste_entretien: 'Ventilation'
          }
        ]
      },
      descriptif_travaux: {
        pack_travaux_collection: {
          pack_travaux: [
            {
              enum_num_pack_travaux_id: '1',
              conso_5_usages_apres_travaux: 116,
              emission_ges_5_usages_apres_travaux: 3,
              cout_pack_travaux_min: 100,
              cout_pack_travaux_max: 150,
              travaux_collection: {
                travaux: [
                  {
                    description_travaux:
                      "Isolation des murs par l'intérieur.\nAvant d'isoler un mur, vérifier qu'il ne présente aucune trace d'humidité.",
                    enum_lot_travaux_id: '1',
                    avertissement_travaux: '',
                    performance_recommande: 'R > 4,5 m².K/W'
                  },
                  {
                    description_travaux:
                      'Remplacer le système actuel par un appareil de type pompe à chaleur.',
                    enum_lot_travaux_id: '6',
                    avertissement_travaux: '',
                    performance_recommande: 'COP = 3'
                  }
                ]
              }
            },
            {
              enum_num_pack_travaux_id: '3',
              conso_5_usages_apres_travaux: 54,
              emission_ges_5_usages_apres_travaux: 1,
              cout_pack_travaux_min: 100,
              cout_pack_travaux_max: 150,
              travaux_collection: {
                travaux: [
                  {
                    description_travaux:
                      'Remplacer les fenêtres par des fenêtres double vitrage à isolation renforcée.',
                    enum_lot_travaux_id: '4',
                    avertissement_travaux: '',
                    performance_recommande: 'Uw = 1,3 W/m².K, Sw = 0,42'
                  },
                  {
                    description_travaux:
                      "Remplacer le système de chauffage par une pompe à chaleur air/air non réversible (la climatisation n'est pas considérée, en cas de mise en place votre étiquette énergie augmentera sensiblement).",
                    enum_lot_travaux_id: '5',
                    avertissement_travaux: '',
                    performance_recommande: 'SCOP = 4'
                  }
                ]
              }
            }
          ]
        },
        commentaire_travaux: ''
      }
    };
  }
}
